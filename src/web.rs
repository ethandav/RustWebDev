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

pub async fn index_handler(
    Extension(store): Extension<Arc<Store>>
) -> Response {
    let question = store.get_random().await;
    match &question {
        Ok(question) => (StatusCode::OK, IndexTemplate::new(question)).into_response(),
        Err(e) => (StatusCode::NO_CONTENT, e.to_string()).into_response(),
    }
}