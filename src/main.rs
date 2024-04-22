use axum::{
    http::StatusCode,
    response::IntoResponse,
    routing::get,
    Router,
    extract::Path,
    Json,
};
use serde::{Deserialize, Serialize };
use std::{str::FromStr, net::SocketAddr, net::IpAddr, net::Ipv4Addr, io};
use tower_http::cors::{CorsLayer, AllowOrigin, AllowMethods};
use http::HeaderName;
use std::collections::HashMap;

#[derive(Debug, Deserialize, Serialize, Clone)]
struct Question {
    id: QuestionId,
    title: String,
    content: String,
    tags: Option<Vec<String>>,
}

#[derive(Debug, Deserialize, Serialize, Clone, PartialEq, Eq, Hash)]
struct QuestionId(String);

impl Question {
    fn new(id: QuestionId, title: String, content: String, tags: Option<Vec<String>>) -> Self {
        Question {
            id,
            title,
            content,
            tags,
        }
    }
}

impl FromStr for QuestionId {
    type Err = io::Error;

    fn from_str(id: &str) -> Result<Self, Self::Err> {
        if id.is_empty() {
            Err(io::Error::new(io::ErrorKind::InvalidInput, "No ID provided"))
        } else {
            Ok(QuestionId(id.to_string()))
        }
    }
}

async fn get_questions(Path(question_id): Path<String>) -> Result<impl IntoResponse, impl IntoResponse> {
    match QuestionId::from_str(&question_id) {
        Ok(id) => {
            let question = Question::new(
                id,
                "First Question".to_string(),
                "Content of question".to_string(),
                Some(vec!["faq".to_string()]),
            );
            Ok(Json(question))
        },
        Err(_) => Err((StatusCode::BAD_REQUEST, "Invalid ID format".to_string()))
    }
}

#[derive(Clone)]
struct Store {
    questions: HashMap<QuestionId, Question>,
}

impl Store {
    fn new() -> Self {
        Store {
            questions: Self::init(),
        }
    }

    fn init() -> HashMap<QuestionId, Question> {
        let file = include_str!("../questions.json");
        serde_json::from_str(file).expect("Can't read questions.json")
    }

    fn add_question(mut self, question: Question) -> Self {
        self.questions.insert(question.id.clone(), question);
        self
    }

    fn show_question(self) {
        for(key ,value) in self.questions.into_iter() {
            println!("{}", value.content)
        }
    }
}

#[tokio::main]
async fn main() {

    let store = Store::new();
    store.show_question();

    let ip = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 3000);
    eprintln!("webhello: serving {}", ip);
    let listener = tokio::net::TcpListener::bind(ip).await.unwrap();
    let app = Router::new()
        .route("/questions/:question_id", get(get_questions))
        .layer(
            CorsLayer::new()
                .allow_origin(AllowOrigin::any())
                .allow_methods(AllowMethods::any())
                .allow_headers(vec![HeaderName::from_static("content-type")]),
        );

    axum::serve(listener, app.into_make_service()).await.unwrap();
}