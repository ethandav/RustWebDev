use axum::{
    http::{StatusCode, Response},
    response::IntoResponse,
    extract::Extension,
    extract::Query,
    extract::Path,
    Json,
    body::Body,
};
use serde::{Deserialize, Serialize };
use std::sync::Arc;
use crate::{Error, Store, extract_pagination};

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct Question {
    pub id: QuestionId,
    pub title: String,
    pub content: String,
    pub tags: Option<Vec<String>>,
}

#[derive(Debug, Deserialize)]
pub struct QuestionQuery {
    pub start: Option<String>,
    pub end: Option<String>
}

#[derive(Debug, Deserialize, Serialize, Clone, PartialEq, Eq, Hash)]
pub struct QuestionId(pub String);

pub async fn get_questions(
    Extension(store): Extension<Arc<Store>>,
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

pub async fn add_question(
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

pub async fn update_question(
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

pub async fn delete_question(
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