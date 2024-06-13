use crate::*;

#[derive(Properties, Clone, PartialEq, serde::Deserialize)]
pub struct Question {
    pub id: i32,
    pub title: String,
    pub content: String,
    pub tags: Vec<String>,
}

impl Question {
    pub async fn get_question(key: Option<String>) -> Msg {
        let request = match &key {
            None => "http://localhost:3000/question".to_string(),
            Some(ref key) => format!("http://localhost:3000/questions/{}", key,),
        };
        let response = http::Request::get(&request).send().await;
        match response {
            Err(e) => Msg::GotJoke(Err(e)),
            Ok(data) => Msg::GotJoke(data.json().await),
        }
    }
}

#[derive(Properties, Clone, PartialEq, serde::Deserialize)]
pub struct QuestionProps {
    pub question: Question,
}

#[function_component(Joke)]
pub fn question(question: &QuestionProps) -> Html {
    let question = &question.question;
    html! { <>
        <div class="question">
            <span class="question">{question.title.clone()}</span><br/>
            <span class="answer">{format!("{}", &question.content)}</span><br/>
        </div>
        <span class="annotation">
            /*{format!("[id: {}", &joke.id)}
            if let Some(ref tags) = joke.tags {
                {format!("; tags: {}", &format_tags(tags))}
            }
            if let Some(ref source) = joke.source {
                {format!("; source: {}", source)}
            }
            {"]"}*/
        </span>
    </> }
}
