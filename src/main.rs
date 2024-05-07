mod routes;
mod store;
use crate::store::*;

use crate::routes::questions::*;
use crate::routes::answers::*;

use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
    routing::post,
    routing::put,
    routing::delete,
    Router,
    extract::Extension,
    extract::Query,
    body::Body,
};

use sqlx::postgres::{PgPoolOptions, PgPool, PgRow};
use sqlx::Row;

use std::{
    net::SocketAddr,
    net::IpAddr,
    net::Ipv4Addr,
    sync::Arc
};
use std::collections::HashSet;
use tower_http::{cors::{CorsLayer, AllowOrigin, AllowMethods}, services};
use http::HeaderName;
use std::collections::HashMap;
use tokio::sync::RwLock;

mod web;
use crate::web::*;

const STYLESHEET: &str = "assets/static/questions.css";

#[derive(Debug)]
enum Error {
    Parse(std::num::ParseIntError),
    MissingParameters,
    QuestionNotFound,
    DatabaseQuery,
}

impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match *self {
            Error::Parse(ref err) => {
                write!(f, "Cannot parse parameter: {}", err)
            },
            Error::MissingParameters => write!(f, "Missing parameter"),
            Error::QuestionNotFound => write!(f, "Question not found"),
            Error::DatabaseQuery => write!(f, "Error querying database"),
        }
    }
}

impl IntoResponse for Error {
    fn into_response(self) -> Response<Body> {
        let (status, message) = match self {
            Error::Parse(_) => (StatusCode::BAD_REQUEST, "Invalid parameters"),
            Error::MissingParameters => (StatusCode::BAD_REQUEST, "Missing parameters"),
            Error::QuestionNotFound => (StatusCode::NOT_FOUND, "Question not found"),
            Error::DatabaseQuery => (StatusCode::BAD_REQUEST, "Error querying database.")
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
    let store = Store::new("postgres://postgres:thisismypassword@db:5432/questions").await;
    let store = Arc::new(RwLock::new(store));

    sqlx::migrate!()
        .run(&store.clone().read().await.connection).await.expect("Cannot run migration!");

    let test_query = store.read().await.get_questions().await;
    eprintln!("{:?}", test_query);

    let ip = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), 3000);
    eprintln!("Questions server: serving at {}", ip);
    let listener = tokio::net::TcpListener::bind(ip).await.unwrap();

    let mime_type = core::str::FromStr::from_str("text/css").unwrap();
    let stylesheet = services::ServeFile::new_with_mime(STYLESHEET, &mime_type);

    let app = Router::new()
        .route("/", get(index_handler))
        .route("/questions", get(questions_index))
        .route("/questions", post(add_question))
        //.route("/questions/:id", put(update_question))
        //.route("/questions/:id", delete(delete_question))
        //.route("/answers", post(add_answer))
        .route_service("/questions.css", stylesheet)
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
