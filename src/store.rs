use crate::routes::questions::*;
use sqlx::postgres::{PgPoolOptions, PgPool, PgRow};
use sqlx::Row;
use sqlx::Pool;
use crate::Error;
use crate::Answer;
use crate::AnswerId;

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
        limit: i32,
        offset: i32
    ) -> Result<Vec<Question>, Error> {
        match sqlx::query("select * from questions limit $1 offset $2")
            .bind(limit)
            .bind(offset)
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

    /*pub async fn get_random(&self) -> Result<Question, sqlx::Error> {
        let row = sqlx::query(r#"SELECT * FROM questions ORDER BY RANDOM () LIMIT 1;"#)
            .fetch_one(&self.connection)
            .await?;

        let question = self.to_question(&row).await?;
        Ok(question)
    }*/

    pub async fn get_question(&self, index: &i32) -> Result<Question, sqlx::Error> {
        let row = sqlx::query(r#"SELECT * FROM questions where id = $1;"#)
            .bind(index)
            .fetch_one(&self.connection)
            .await?;
        
        let question = self.to_question(&row).await?;
        Ok(question)
    }

    pub async fn add(&mut self, question: Question) -> Result<(), sqlx::Error> {
        let mut tx = Pool::begin(&self.connection).await?;
        sqlx::query(
            r#"INSERT INTO questions
            (id, title, content, tags)
            VALUES ($1, $2, $3, $4);"#,
        )
        .bind(question.id.0)
        .bind(&question.title)
        .bind(&question.content)
        .bind(&question.tags)
        .execute(&mut *tx)
        .await?;
        tx.commit().await
    }

    pub async fn update(&mut self, index: &i32, question: Question) -> Result<(), sqlx::Error> {
        let mut tx = Pool::begin(&self.connection).await?;
        let q = sqlx::query(
            r#"UPDATE questions SET
            title = $2, content = $3, tags = $4
            WHERE id = $1;"#
        );
        q.bind(index)
            .bind(&question.title)
            .bind(&question.content)
            .bind(&question.tags)
            .execute(&mut *tx)
            .await?;
        tx.commit().await
    }

    pub async fn delete(&mut self, index: &i32) -> Result<(), sqlx::Error> {
        let mut tx = Pool::begin(&self.connection).await?;
        let q = sqlx::query(r#"DELETE FROM questions WHERE id = $1;"#);
        q.bind(index)
            .execute(&mut *tx)
            .await?;
        tx.commit().await
    }

    pub async fn get_answers (
        &self,
        //limit: Option<u32>,
        //offset: u32
    ) -> Result<Vec<Answer>, Error> {
        match sqlx::query("select * from answers")
            .map(|row: PgRow| Answer {
                id: AnswerId(row.get("id")),
                content: row.get("content"),
                question_id: QuestionId(row.get("corresponding_question")),
            })
            .fetch_all(&self.connection)
            .await {
                Ok(answers) => Ok(answers),
                Err(_) => {
                    Err(Error::DatabaseQuery)
                }
            }
    }

    pub async fn add_answer(&mut self, answer: Answer) -> Result<(), sqlx::Error> {
        let mut tx = Pool::begin(&self.connection).await?;
        sqlx::query(
            r#"INSERT INTO answers
            (id, content, corresponding_question)
            VALUES ($1, $2, $3);"#,
        )
        .bind(answer.id.0)
        .bind(&answer.content)
        .bind(answer.question_id.0)
        .execute(&mut *tx)
        .await?;
        tx.commit().await
    }

    pub async fn update_answer(&mut self, index: &i32, answer: Answer) -> Result<(), sqlx::Error> {
        let mut tx = Pool::begin(&self.connection).await?;
        let q = sqlx::query(
            r#"UPDATE answers SET
            content = $2, corresponding_question = $3
            WHERE id = $1;"#
        );
        q.bind(index)
            .bind(&answer.content)
            .bind(answer.question_id.0)
            .execute(&mut *tx)
            .await?;
        tx.commit().await
    }

    pub async fn delete_answer(&mut self, index: &i32) -> Result<(), sqlx::Error> {
        let mut tx = Pool::begin(&self.connection).await?;
        let q = sqlx::query(r#"DELETE FROM answers WHERE id = $1;"#);
        q.bind(index)
            .execute(&mut *tx)
            .await?;
        tx.commit().await
    }

}