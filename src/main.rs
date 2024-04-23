use axum::{
    http::StatusCode,
    response::IntoResponse,
    routing::get,
    Router,
    extract::Path,
    extract::Extension,
    extract::Query,
    Json,
};
use serde::{Deserialize, Serialize };
use std::{
    str::FromStr,
    net::SocketAddr,
    net::IpAddr,
    net::Ipv4Addr,
    io,
    sync::Arc
};
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

async fn get_questions(
    Extension(store): Extension<Arc<Store>>,
    query: Query<QuestionQuery>
) -> Result<Json<Vec<Question>>, StatusCode> {
    eprintln!("{:?}", query);
    let res: Vec<Question> = store.questions.values().cloned().collect();
    Ok(Json(res))
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

    async fn get_question(self, Path(question_id): Path<String>) {
        let question = self.questions.get(&QuestionId(question_id));
        if let Some(v) = question {
            eprintln!("{}", v.content);
        }
    }
}

#[derive(Debug, Deserialize)]
struct QuestionQuery {
    tag: Option<String>,
}

#[tokio::main]
async fn main() {
    let store = Arc::new(Store::new());

    let ip = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 3000);
    eprintln!("Questions server: serving at {}", ip);
    let listener = tokio::net::TcpListener::bind(ip).await.unwrap();

    let app = Router::new()
        .route("/questions", get(get_questions))
        .layer(
            CorsLayer::new()
                .allow_origin(AllowOrigin::any())
                .allow_methods(AllowMethods::any())
                .allow_headers(vec![HeaderName::from_static("content-type")]),
        )
        .layer(Extension(store));

    axum::serve(listener, app.into_make_service_with_connect_info::<SocketAddr>()).await.unwrap();
}
