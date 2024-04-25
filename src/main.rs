mod routes;

use crate::routes::questions::*;
use crate::routes::answers::*;

use axum::{
    http::{StatusCode, Response},
    response::IntoResponse,
    routing::get,
    routing::post,
    routing::put,
    routing::delete,
    Router,
    extract::Extension,
    extract::Query,
    body::Body,
    Json,
};

use std::{
    net::SocketAddr,
    net::IpAddr,
    net::Ipv4Addr,
    sync::Arc
};
use tower_http::cors::{CorsLayer, AllowOrigin, AllowMethods};
use http::HeaderName;
use std::collections::HashMap;
use tokio::sync::RwLock;

#[derive(Clone)]
struct Store {
    questions: Arc<RwLock<HashMap<QuestionId, Question>>>,
    answers: Arc<RwLock<HashMap<AnswerId, Answer>>>,
}

impl Store {
    fn new() -> Self {
        Store {
            questions: Arc::new(RwLock::new(Self::init())),
            answers: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    fn init() -> HashMap<QuestionId, Question> {
        let file = include_str!("../questions.json");
        serde_json::from_str(file).expect("Can't read questions.json")
    }

    pub async fn get_random(&self) -> Result<Question, StatusCode> {
        let questions = self.questions.read().await.clone();
        let(_, question) = fastrand::choice(questions.iter())
            .ok_or(StatusCode::BAD_REQUEST)?;
        Ok(question.to_owned())
    }
}

async fn index_handler(
    Extension(store): Extension<Arc<Store>>
) -> Result<Json<Question>, StatusCode> {
    let question = store.get_random();
    Ok(Json(question.await.unwrap()))
}

#[derive(Debug)]
enum Error {
    Parse(std::num::ParseIntError),
    MissingParameters,
    QuestionNotFound,
}

impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match *self {
            Error::Parse(ref err) => {
                write!(f, "Cannot parse parameter: {}", err)
            },
            Error::MissingParameters => write!(f, "Missing parameter"),
            Error::QuestionNotFound => write!(f, "Question not found"),
        }
    }
}

impl IntoResponse for Error {
    fn into_response(self) -> Response<Body> {
        let (status, message) = match self {
            Error::Parse(_) => (StatusCode::BAD_REQUEST, "Invalid parameters"),
            Error::MissingParameters => (StatusCode::BAD_REQUEST, "Missing parameters"),
            Error::QuestionNotFound => (StatusCode::NOT_FOUND, "Question not found"),
        };
        Response::builder()
            .status(status)
            .body(Body::from(message))
            .unwrap()
    }
}

#[derive(Debug)]
struct Pagination {
    start: usize,
    end: usize,
}

fn extract_pagination(
    query: Query<QuestionQuery>
) -> Result<Pagination, Error> {
    if let (Some(start), Some(end)) = (&query.start, &query.end) {
        let start_parsed = start.parse::<usize>().map_err(Error::Parse)?;
        let end_parsed = end.parse::<usize>().map_err(Error::Parse)?;

        Ok(Pagination {
            start: start_parsed,
            end: end_parsed,
        })
    } else {
        Err(Error::MissingParameters)
    }
}

async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, "404 Not Found")
}

#[tokio::main]
async fn main() {
    let store = Arc::new(Store::new());

    let ip = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 3000);
    eprintln!("Questions server: serving at {}", ip);
    let listener = tokio::net::TcpListener::bind(ip).await.unwrap();

    let app = Router::new()
        .route("/", get(index_handler))
        .route("/questions", get(get_questions))
        .route("/questions", post(add_question))
        .route("/questions/:id", put(update_question))
        .route("/questions/:id", delete(delete_question))
        .route("/answers", post(add_answer))
        .layer(
            CorsLayer::new()
                .allow_origin(AllowOrigin::any())
                .allow_methods(AllowMethods::any())
                .allow_headers(vec![HeaderName::from_static("content-type")]),
        )
        .layer(Extension(store))
        .fallback(get(not_found));

    axum::serve(listener, app.into_make_service_with_connect_info::<SocketAddr>()).await.unwrap();
}
