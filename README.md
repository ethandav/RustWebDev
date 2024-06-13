# Rust Web Example
Ethan Davis<br>
Homework Repo for CS 410P - Rust Web Developement

<h1>To Build:</h1>
docker compose up --build
cd to QuestionsFrontEnd then run `trunk serve` then access http://localhost:8080

<h2>Routes:</h2>
/<br>
/ask<br>
/questions<br>
/answers<br>

<h2>Examples for using the Questions REST API:</h2>
<h4>Add Answer</h4>
Navigate to /questions/:id and use form to sumbit a new answer to the question

<h4>Delete Answer</h4>
curl --location --request DELETE 'localhost:3000/answers/1' --header 'Content-Type: application/json'

<h4>Update Answer</h4>
curl --location --request PUT 'http://localhost:3000/answers/2' --header 'Content-Type: application/json' --data-raw '{"id":2,"title":"New Answer REDUX","content":"Google it, silly goose!","question_id":"1"}' 

<h4>Add Question</h4>
Navigate to /ask and use the form to submit a question

<h4>Delete Question</h4>
curl --location --request DELETE 'localhost:3000/questions/3' --header 'Content-Type: application/json'

<h4>Update Question</h4>
curl --location --request PUT 'localhost:3000/questions/2' --header 'Content-Type: application/json' --data-raw '{ "id": "2", "title": "New Question!", "content": "Seriously please help I am going to die", "tags":["Rust","WebDev"]}'
