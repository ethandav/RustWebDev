use axum::{
    http::{StatusCode, Response},
    response::IntoResponse,
    extract::Extension,
    extract::Form,
    body::Body,
};
use serde::{Deserialize, Serialize };
use std::sync::Arc;
use crate::{Error, Store, QuestionId};
use crate::routes::questions::parse_id;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Answer {
    id: AnswerId,
    content: String,
    question_id: QuestionId,
}

#[derive(Deserialize, Serialize, Debug, Clone, PartialEq, Eq, Hash)]
pub struct AnswerId(String);

#[derive(Debug, Deserialize)]
pub struct AnswerForm {
    content: Option<String>,
    question_id: Option<String>,
}

pub async fn add_answer(
    Extension(store): Extension<Arc<Store>>,
    Form(form): Form<AnswerForm>
) -> Result<impl IntoResponse, Error> {
    eprintln!("Content: {:?}", form);
    if let (Some(content), Some(question_id)) = (&form.content, &form.question_id) {
        let answer = Answer {
            id: AnswerId("1".to_string()),
            content: content.to_string(),
            question_id: QuestionId(parse_id(question_id).unwrap()),
        };
        //store.answers.write().await.insert(answer.id.clone(), answer);
        let response = Response::builder()
            .status(StatusCode::OK)
            .body(Body::from("Answer added"))
            .unwrap();

        Ok(response)
    } else {
        Err(Error::MissingParameters)
    }
}