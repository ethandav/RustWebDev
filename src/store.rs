use crate::routes::questions::*;
use sqlx::postgres::{PgPoolOptions, PgPool, PgRow};
use sqlx::Row;
use crate::Error;

#[derive(Clone)]
pub struct Store {
    pub connection: PgPool,
}

impl Store {
    async fn to_question(&self, row: &PgRow) -> Result<Question, sqlx::Error> {
        Ok(Question {
            id: QuestionId(row.get("id")),
            title: row.get("title"),
            content: row.get("content"),
            tags: row.get("tags"),
        })
    }

    pub async fn new(db_url: &str) -> Self {
        let db_pool = match PgPoolOptions::new()
            .max_connections(5)
            .connect(db_url).await {
                Ok(pool) => pool,
                Err(e) => panic!("Could not establish db connection: {}", e)
        };
        
        Store {
            connection: db_pool,
        }
    }

    pub async fn get_questions (
        &self,
        //limit: Option<u32>,
        //offset: u32
    ) -> Result<Vec<Question>, Error> {
        match sqlx::query("select * from questions")
            .map(|row: PgRow| Question {
                id: QuestionId(row.get("id")),
                title: row.get("title"),
                content: row.get("content"),
                tags: row.get("tags"),
            })
            .fetch_all(&self.connection)
            .await {
                Ok(questions) => Ok(questions),
                Err(_) => {
                    Err(Error::DatabaseQuery)
                }
            }
    }

    pub async fn get_random(&self) -> Result<Question, sqlx::Error> {
        let row = sqlx::query(r#"SELECT * FROM questions ORDER BY RANDOM () LIMIT 1;"#)
            .fetch_one(&self.connection)
            .await?;

        let question = self.to_question(&row).await?;
        Ok(question)
    }
}