mod routes;
mod store;
mod errors;
use crate::errors::Error;
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
};

use std::{
    net::SocketAddr,
    net::IpAddr,
    net::Ipv4Addr,
    sync::Arc
};
use tower_http::{cors::{CorsLayer, AllowOrigin, AllowMethods}, services};
use http::HeaderName;
use tokio::sync::RwLock;

mod web;
use crate::web::*;

const STYLESHEET: &str = "assets/static/questions.css";

#[tokio::main]
async fn main() {
    let store = Store::new("postgres://postgres:thisismypassword@db:5432/questions").await;
    let store = Arc::new(RwLock::new(store));

    sqlx::migrate!()
        .run(&store.clone().read().await.connection).await.expect("Cannot run migration!");

    let ip = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), 3000);
    eprintln!("Questions server: serving at {}", ip);
    let listener = tokio::net::TcpListener::bind(ip).await.unwrap();

    let mime_type = core::str::FromStr::from_str("text/css").unwrap();
    let stylesheet = services::ServeFile::new_with_mime(STYLESHEET, &mime_type);

    let app = Router::new()
        .route("/", get(index_handler))
        .route("/ask", get(ask_handler))
        .route("/questions", get(questions_index))
        .route("/questions/add", post(add_question))
        .route("/questions/:id", put(update_question))
        .route("/questions/:id", delete(delete_question))
        .route("/answers", get(answers_index))
        .route("/answers", post(add_answer))
        .route("/answers/:id", put(update_answer))
        .route("/answers/:id", delete(delete_answer))
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
