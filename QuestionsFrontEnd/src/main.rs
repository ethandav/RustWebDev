mod finder;
mod question;

use finder::*;
use question::*;

use std::collections::HashSet;

extern crate serde;
use gloo_net::http;
extern crate wasm_bindgen_futures;
use web_sys::HtmlTextAreaElement;
use yew::prelude::*;

pub type QuestionResult = Result<Question, gloo_net::Error>;

struct App {
    question: QuestionResult,
}

pub enum Msg {
    GotJoke(QuestionResult),
    GetJoke(Option<String>),
}

impl App {
    fn refresh_joke(ctx: &Context<Self>, key: Option<String>) {
        let got_joke = Question::get_question(key);
        ctx.link().send_future(got_joke);
    }
}

impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(ctx: &Context<Self>) -> Self {
        App::refresh_joke(ctx, None);
        let question = Err(gloo_net::Error::GlooError("Loading Question…".to_string()));
        Self { question }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::GotJoke(joke) => {
                self.question = joke;
                true
            }
            Msg::GetJoke(key) => {
                App::refresh_joke(ctx, key);
                false
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let question = &self.question;
        html! {
        <>
            <h1>{ "Questions" }</h1>
            if let Ok(ref question) = question {
                <Joke question={question.clone()}/>
            }
            if let Err(ref error) = question {
                <div>
                    <span class="error">{format!("Server Error: {error}")}</span>
                </div>
            }
            <div>
                <button onclick={ctx.link().callback(|_| Msg::GetJoke(None))}>{"Tell me another!"}</button>
            </div>
            <Finder on_find={ctx.link().callback(Msg::GetJoke)}/>
        </>
        }
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
