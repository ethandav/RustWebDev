use crate::*;
use askama::Template;
use serde::Deserialize;
use axum::extract::Query;
use axum::extract::Path;

#[derive(Debug, Deserialize)]
pub struct PaginationQuery {
    pub page: Option<String>,
    pub limit: Option<String>
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
#[template(path = "question.html")]
pub struct QuestionTemplate<'a> {
    question: &'a Question,
    answers: &'a Vec<Answer>,
    stylesheet: &'static str,
}

impl<'a> QuestionTemplate<'a> {
    fn new(question: &'a Question, answers: &'a Vec<Answer>) -> Self {
        Self {
            question,
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
    let mut page: i32 = 1;
    let mut limit: i32 = 20;
    if query.page.is_some() && query.limit.is_some() {
        match &extract_pagination(query) {
            Ok(pagination) => {
                page = pagination.page;
                limit = pagination.limit;
            },
            Err(err) => {
                (StatusCode::NO_CONTENT, err.to_string()).into_response();
            }
        }
    }
    let questions = store.read().await.get_questions(limit, page).await;
    match &questions {
        Ok(question) => (StatusCode::OK, QuestionsTemplate::new(question)).into_response(),
        Err(e) => (StatusCode::NO_CONTENT, e.to_string()).into_response(),
    }
}

pub async fn question_index(
    Extension(store): Extension<Arc<RwLock<Store>>>,
    Path(id_str): Path<String>
) -> Response {
    let question_id = parse_id(&id_str).unwrap();
    let question = store.read().await.get_question(&question_id).await;
    let answers = store.read().await.get_answers(question_id).await;
    match &question {
        Ok(question) => (StatusCode::OK, QuestionTemplate::new(question,&answers.unwrap())).into_response(),
        Err(e) => (StatusCode::NO_CONTENT, e.to_string()).into_response(),
    }
}

pub async fn index_handler(
    Extension(store): Extension<Arc<RwLock<Store>>>
) -> Response {
    let questions = store.read().await.get_questions(20,1).await;
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
    page: i32,
    limit: i32,
}

fn extract_pagination(
    query: Query<PaginationQuery>
) -> Result<Pagination, Error> {
    if let (Some(page), Some(limit)) = (&query.page, &query.limit) {
        let start_parsed = page.parse::<i32>().map_err(Error::Parse)?;
        let end_parsed = limit.parse::<i32>().map_err(Error::Parse)?;

        Ok(Pagination {
            page: start_parsed,
            limit: end_parsed,
        })
    } else {
        Err(Error::MissingParameters)
    }
}

pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, "404 Not Found")
}