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
    extract::Path,
    Json,
    body::Body,
};
use serde::{Deserialize, Serialize };
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

#[derive(Debug, Deserialize, Serialize, Clone)]
struct Question {
    id: QuestionId,
    title: String,
    content: String,
    tags: Option<Vec<String>>,
}

#[derive(Debug, Deserialize, Serialize, Clone, PartialEq, Eq, Hash)]
struct QuestionId(String);

async fn get_questions(
    Extension(store): Extension<Arc<Store>>,
    query: Query<QuestionQuery>
) -> Result<Json<Vec<Question>>, StatusCode> {

    if query.start.is_some() && query.end.is_some() {
        match extract_pagination(query) {
            Ok(pagination) => {
                eprintln!("Pagination: start = {}, end = {}", pagination.start, pagination.end);
                let res: Vec<Question> = store.questions.read().await.values()
                    .skip(pagination.start)
                    .take(pagination.end - pagination.start)
                    .cloned()
                    .collect();
                Ok(Json(res))
            },
            Err(err) => {
                eprintln!("Error extracting pagination: {}", err);
                Err(StatusCode::BAD_REQUEST)
            }
        }
    } else {
        let res: Vec<Question> = store.questions.read().await.values().cloned().collect();
        Ok(Json(res))
    }
}

async fn add_question(
    Extension(store): Extension<Arc<Store>>,
    Json(question): Json<Question>
) -> Result<impl IntoResponse, StatusCode> {
    store.questions.write().await.insert(question.id.clone(), question);
    let response = Response::builder()
        .status(StatusCode::OK)
        .body(Body::from("Question added"))
        .unwrap();

    Ok(response)
}

async fn update_question(
    Extension(store): Extension<Arc<Store>>,
    Path(id): Path<String>,
    Json(question): Json<Question>
) -> Result<impl IntoResponse, Error> {
    match store.questions.write().await.get_mut(&QuestionId(id)) {
        Some(q) => *q = question,
        None => return Err(Error::QuestionNotFound)
    }
    let response = Response::builder()
        .status(StatusCode::OK)
        .body(Body::from("Question updated"))
        .unwrap();

    Ok(response)
}

async fn delete_question(
    Extension(store): Extension<Arc<Store>>,
    Path(id): Path<String>,
) -> Result<impl IntoResponse, Error> {
    match store.questions.write().await.remove(&QuestionId(id)) {
        Some(_) => {
            let response = Response::builder()
                .status(StatusCode::OK)
                .body(Body::from("Question deleted"))
                .unwrap();
            Ok(response)
        },
        None => Err(Error::QuestionNotFound)
    }

}

#[derive(Clone)]
struct Store {
    questions: Arc<RwLock<HashMap<QuestionId, Question>>>,
}

impl Store {
    fn new() -> Self {
        Store {
            questions: Arc::new(RwLock::new(Self::init())),
        }
    }

    fn init() -> HashMap<QuestionId, Question> {
        let file = include_str!("../questions.json");
        serde_json::from_str(file).expect("Can't read questions.json")
    }
}

#[derive(Debug, Deserialize)]
struct QuestionQuery {
    start: Option<String>,
    end: Option<String>
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

#[tokio::main]
async fn main() {
    let store = Arc::new(Store::new());

    let ip = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 3000);
    eprintln!("Questions server: serving at {}", ip);
    let listener = tokio::net::TcpListener::bind(ip).await.unwrap();

    let app = Router::new()
        .route("/questions", get(get_questions))
        .route("/questions", post(add_question))
        .route("/questions/:id", put(update_question))
        .route("/questions/:id", delete(delete_question))
        .layer(
            CorsLayer::new()
                .allow_origin(AllowOrigin::any())
                .allow_methods(AllowMethods::any())
                .allow_headers(vec![HeaderName::from_static("content-type")]),
        )
        .layer(Extension(store));

    axum::serve(listener, app.into_make_service_with_connect_info::<SocketAddr>()).await.unwrap();
}
