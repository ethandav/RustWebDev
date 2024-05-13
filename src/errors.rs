

use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    body::Body,
};

#[derive(Debug)]
pub enum Error {
    Parse(std::num::ParseIntError),
    MissingParameters,
    //QuestionNotFound,
    DatabaseQuery,
}

impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match *self {
            Error::Parse(ref err) => {
                write!(f, "Cannot parse parameter: {}", err)
            },
            Error::MissingParameters => write!(f, "Missing parameter"),
            //Error::QuestionNotFound => write!(f, "Question not found"),
            Error::DatabaseQuery => write!(f, "Error querying database"),
        }
    }
}

impl IntoResponse for Error {
    fn into_response(self) -> Response<Body> {
        let (status, message) = match self {
            Error::Parse(_) => (StatusCode::BAD_REQUEST, "Invalid parameters"),
            Error::MissingParameters => (StatusCode::BAD_REQUEST, "Missing parameters"),
            //Error::QuestionNotFound => (StatusCode::NOT_FOUND, "Question not found"),
            Error::DatabaseQuery => (StatusCode::BAD_REQUEST, "Error querying database.")
        };
        Response::builder()
            .status(status)
            .body(Body::from(message))
            .unwrap()
    }
}