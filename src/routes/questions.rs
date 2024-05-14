use axum::{
    http::{StatusCode, Response},
    response::IntoResponse,
    extract::Extension,
    extract::Path,
    Json,
    body::Body,
};
use axum::Form;
use serde::{Deserialize, Deserializer, Serialize};
use serde::de::{self, Visitor};
use std::sync::Arc;
use crate::Store;
use std::fmt;
use tokio::sync::RwLock;

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Question {
    pub id: QuestionId,
    pub title: String,
    pub content: String,
    pub tags: Vec<String>,
}

#[derive(Debug, Deserialize)]
pub struct QuestionQuery {
    pub start: Option<String>,
    pub end: Option<String>
}

#[derive(Debug, Serialize, Clone, PartialEq, Eq, Hash)]
pub struct QuestionId(pub i32);

struct QuestionIdVisitor;

impl<'de> Visitor<'de> for QuestionIdVisitor {
    type Value = QuestionId;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("a string representing a u32")
    }

    fn visit_str<E>(self, value: &str) -> Result<Self::Value, E>
    where
        E: de::Error,
    {
        value.parse::<i32>().map(QuestionId).map_err(de::Error::custom)
    }
}

impl fmt::Display for QuestionId {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl<'de> Deserialize<'de> for QuestionId {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_str(QuestionIdVisitor)
    }
}

#[derive(Deserialize)]
pub struct QuestionForm {
    title: String,
    content: String,
    tags: String,
}

pub async fn add_question(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    Form(question_form): Form<QuestionForm>
) -> Result<impl IntoResponse, StatusCode> {

    let parsed_tags: Vec<String> = question_form.tags.split(',')
        .map(|s| s.trim().to_string())
        .filter(|s| !s.is_empty())
        .collect();

    let question = Question {
        id: QuestionId(0),
        title: question_form.title,
        content: question_form.content,
        tags: parsed_tags,
    };
    let mut store = store.write().await;
    match store.add(question).await {
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

pub async fn update_question(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    Path(id_str): Path<String>,
    Json(question): Json<Question>
) -> Result<impl IntoResponse, StatusCode> {
    let id = parse_id(&id_str).unwrap();
    let mut store = store.write().await;
    match store.update(&id, question).await {
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

pub async fn delete_question(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    Path(id_str): Path<String>,
) -> Result<impl IntoResponse, StatusCode> {
    let id = parse_id(&id_str).unwrap();
    let mut store = store.write().await;
    match store.delete(&id).await {
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

/*
pub async fn get_questions(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    query: Query<QuestionQuery>
) -> Result<Json<Vec<Question>>, Error> {

    if query.start.is_some() && query.end.is_some() {
        match extract_pagination(query) {
            Ok(pagination) => {
                let res: Vec<Question> = store.questions.read().await.values()
                    .skip(pagination.start)
                    .take(pagination.end - pagination.start)
                    .cloned()
                    .collect();
                Ok(Json(res))
            },
            Err(err) => {
                Err(err)
            }
        }
    } else {
        let res: Vec<Question> = store.questions.read().await.values().cloned().collect();
        Ok(Json(res))
    }
}
*/

pub fn parse_id(id_str: &str) -> Result<i32, String> {
    match id_str.parse::<i32>() {
        Ok(num) => Ok(num),
        Err(_) => Err(format!("Failed to parse ID from the URL: {}", id_str)),
    }
}