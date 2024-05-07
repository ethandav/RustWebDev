# Rust Web Example
Ethan Davis<br>
Homework Repo for CS 410P - Rust Web Developement

To Build:
docker compose up --build

Examples for using the Questions REST API:
Add Answer
curl --location --request POST 'http://localhost:3000/answers' --header 'Content-Type: application/json' --data-raw '{"id":2,"title":"New Answer 2","content":"Google it, dummy!","question_id":"1"}' 

Delete Answer
curl --location --request DELETE 'localhost:3000/answers/1' --header 'Content-Type: application/json'

Update Answer
curl --location --request PUT 'http://localhost:3000/answers/2' --header 'Content-Type: application/json' --data-raw '{"id":2,"title":"New Answer REDUX","content":"Google it, silly goose!","question_id":"1"}' 

Add Question
curl --location --request POST 'http://localhost:3000/questions' --header 'Content-Type: application/json' --data-raw '{"id":"3","title":"New Question","content":"How does this work again?","tags":["Rust","Webdev"]}'

Delete Question
curl --location --request DELETE 'localhost:3000/questions/3' --header 'Content-Type: application/json'

Update Question
curl --location --request PUT 'localhost:3000/questions/2' --header 'Content-Type: application/json' --data-raw '{ "id": "2", "title": "New Question!", "content": "Seriously please help I am going to die", "tags":["Rust","WebDev"]}'
