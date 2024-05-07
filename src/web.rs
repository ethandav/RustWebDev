use crate::*;
use askama::Template;

#[derive(Template)]
#[template(path = "index.html")]
pub struct IndexTemplate<'a> {
    question: &'a Question,
    stylesheet: &'static str,
}

impl<'a> IndexTemplate<'a> {
    fn new(question: &'a Question) -> Self {
        Self {
            question,
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

pub async fn questions_index(
    Extension(store): Extension<Arc<RwLock<Store>>>
) -> Response {
    let questions = store.read().await.get_questions().await;
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
    let question = store.read().await.get_random().await;
    match &question {
        Ok(question) => (StatusCode::OK, IndexTemplate::new(question)).into_response(),
        Err(e) => (StatusCode::NO_CONTENT, e.to_string()).into_response(),
    }
}

//TODO: Pagination
/*
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
*/
pub async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, "404 Not Found")
}