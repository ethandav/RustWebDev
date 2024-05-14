use axum::{
    http::{StatusCode, Response},
    response::IntoResponse,
    extract::Extension,
    extract::Path,
    Json,
    body::Body,
};
use serde::{Deserialize, Serialize};
use serde::de::{self, Visitor};
use std::sync::Arc;
use crate::Store;
use std::fmt;
use tokio::sync::RwLock;
use crate::QuestionId;
use crate::parse_id;
use axum::Form;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Answer {
    pub id: AnswerId,
    pub content: String,
    pub question_id: QuestionId,
}

#[derive(Deserialize, Serialize, Debug, Clone, PartialEq, Eq, Hash)]
pub struct AnswerId(pub i32);

struct AnswerIdVisitor;

impl<'de> Visitor<'de> for AnswerIdVisitor {
    type Value = AnswerId;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("a string representing a u32")
    }

    fn visit_str<E>(self, value: &str) -> Result<Self::Value, E>
    where
        E: de::Error,
    {
        value.parse::<i32>().map(AnswerId).map_err(de::Error::custom)
    }
}

impl fmt::Display for AnswerId {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

#[derive(Deserialize)]
pub struct AnswerForm {
    content: String,
    corresponding_question: String,
}

pub async fn add_answer(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    Form(answer_form): Form<AnswerForm>
) -> Result<impl IntoResponse, StatusCode> {

    let answer = Answer {
        id: AnswerId(0),
        content: answer_form.content,
        question_id: QuestionId(parse_id(&answer_form.corresponding_question).unwrap()),
    };

    let mut store = store.write().await;
    match store.add_answer(answer).await {
        Ok(_) => {
            let response = Response::builder()
                .status(StatusCode::CREATED)
                .body(Body::from("Question added"))
                .unwrap();

            Ok(response)
        },
        Err(e) => {
            eprintln!("Failed to add question: {}", e);
            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}

pub async fn update_answer(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    Path(id_str): Path<String>,
    Json(answer): Json<Answer>
) -> Result<impl IntoResponse, StatusCode> {
    let id = parse_id(&id_str).unwrap();
    let mut store = store.write().await;
    match store.update_answer(&id, answer).await {
        Ok(_) => {
            let response = Response::builder()
                .status(StatusCode::CREATED)
                .body(Body::from("Question Updated"))
                .unwrap();

            Ok(response)
        },
        Err(e) => {
            eprintln!("Failed to Update question: {}", e);
            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}

pub async fn delete_answer(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    Path(id_str): Path<String>,
) -> Result<impl IntoResponse, StatusCode> {
    let id = parse_id(&id_str).unwrap();
    let mut store = store.write().await;
    match store.delete_answer(&id).await {
        Ok(_) => {
            let response = Response::builder()
                .status(StatusCode::CREATED)
                .body(Body::from("Question Deleted"))
                .unwrap();

            Ok(response)
        },
        Err(e) => {
            eprintln!("Failed to Delete question: {}", e);
            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}