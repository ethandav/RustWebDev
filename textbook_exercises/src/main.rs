use warp::{Filter, reject::Reject, Rejection, Reply, http::StatusCode};
use serde::Serialize;

#[derive(Debug)]
struct InvalidId;
impl Reject for InvalidId {}

#[derive(Debug, Serialize)]
struct Question {
    id: QuestionId,
    title: String,
    content: String,
    tags: Option<Vec<String>>,
}

#[derive(Debug, Serialize)]
struct QuestionId(String);

impl QuestionId {
    fn new(id: String) -> Self {
        QuestionId(id)
    }
}

impl Question {
    fn new(id: QuestionId, title: String, content: String, tags: Option<Vec<String>>) -> Self {
        Question { id, title, content, tags }
    }
}

async fn get_questions() -> Result<impl warp::Reply, warp::Rejection> {
    let question = Question::new(
        QuestionId::new("1".to_string()),
        "First Question".to_string(),
        "Content of question".to_string(),
        Some(vec!["faq".to_string()]),
    );

    match question.id.0.parse::<i32>() {
        Err(_) => Err(warp::reject::custom(InvalidId)),
        Ok(_) => Ok(warp::reply::json(&question))
    }
}

async fn return_error(err: Rejection) -> Result<impl Reply, std::convert::Infallible> {
    if err.is_not_found() {
        Ok(warp::reply::with_status("Not Found", StatusCode::NOT_FOUND))
    } else {
        Ok(warp::reply::with_status("Internal Server Error", StatusCode::INTERNAL_SERVER_ERROR))
    }
}

#[tokio::main]
async fn main() {
    let get_items = warp::get()
        .and(warp::path("questions"))
        .and(warp::path::end())
        .and_then(get_questions)
        .recover(return_error);

    let routes = get_items;

    warp::serve(routes)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
