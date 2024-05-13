use crate::*;
use askama::Template;
use serde::Deserialize;
use axum::extract::Query;

#[derive(Debug, Deserialize)]
pub struct PaginationQuery {
    pub start: Option<String>,
    pub end: Option<String>
}

#[derive(Template)]
#[template(path = "index.html")]
pub struct IndexTemplate<'a> {
    questions: &'a Vec<Question>,
    stylesheet: &'static str,
}

impl<'a> IndexTemplate<'a> {
    fn new(questions: &'a Vec<Question>) -> Self {
        Self {
            questions,
            stylesheet: "/questions.css",
        }
    }
}

#[derive(Template)]
#[template(path = "questions.html")]
pub struct QuestionsTemplate<'a> {
    questions: &'a Vec<Question>,
    stylesheet: &'static str,
}

impl<'a> QuestionsTemplate<'a> {
    fn new(questions: &'a Vec<Question>) -> Self {
        Self {
            questions,
            stylesheet: "/questions.css",
        }
    }
}

#[derive(Template)]
#[template(path = "answers.html")]
pub struct AnswersTemplate<'a> {
    answers: &'a Vec<Answer>,
    stylesheet: &'static str,
}

impl<'a> AnswersTemplate<'a> {
    fn new(answers: &'a Vec<Answer>) -> Self {
        Self {
            answers,
            stylesheet: "/questions.css",
        }
    }
}

#[derive(Template)]
#[template(path = "ask.html")]
pub struct AskTemplate {
    stylesheet: &'static str,
}

impl AskTemplate {
    fn new() -> Self {
        Self {
            stylesheet: "/questions.css",
        }
    }
}

pub async fn questions_index(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    query: Query<PaginationQuery>
) -> Response {
    let mut start: i32 = 0;
    let mut end: i32 = 0;
    if query.start.is_some() && query.end.is_some() {
        match &extract_pagination(query) {
            Ok(pagination) => {
                start = pagination.start;
                end = pagination.end;
            },
            Err(err) => {
                (StatusCode::NO_CONTENT, err.to_string()).into_response();
            }
        }
    }
    let questions = store.read().await.get_questions(end, start).await;
    match &questions {
        Ok(question) => (StatusCode::OK, QuestionsTemplate::new(question)).into_response(),
        Err(e) => (StatusCode::NO_CONTENT, e.to_string()).into_response(),
    }
}

pub async fn answers_index(
    Extension(store): Extension<Arc<RwLock<Store>>>
) -> Response {
    let answers = store.read().await.get_answers().await;
    match &answers {
        Ok(answer) => (StatusCode::OK, AnswersTemplate::new(answer)).into_response(),
        Err(e) => (StatusCode::NO_CONTENT, e.to_string()).into_response(),
    }
}

pub async fn index_handler(
    Extension(store): Extension<Arc<RwLock<Store>>>
) -> Response {
    //let question = store.read().await.get_random().await;
    let questions = store.read().await.get_questions(0,0).await;
    match &questions {
        Ok(questions) => (StatusCode::OK, IndexTemplate::new(questions)).into_response(),
        Err(e) => (StatusCode::NO_CONTENT, e.to_string()).into_response(),
    }
}

pub async fn ask_handler(
) -> Response {
    (StatusCode::OK, AskTemplate::new()).into_response()
}

#[derive(Debug)]
struct Pagination {
    start: i32,
    end: i32,
}

fn extract_pagination(
    query: Query<PaginationQuery>
) -> Result<Pagination, Error> {
    if let (Some(start), Some(end)) = (&query.start, &query.end) {
        let start_parsed = start.parse::<i32>().map_err(Error::Parse)?;
        let end_parsed = end.parse::<i32>().map_err(Error::Parse)?;

        Ok(Pagination {
            start: start_parsed,
            end: end_parsed,
        })
    } else {
        Err(Error::MissingParameters)
    }
}

pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, "404 Not Found")
}