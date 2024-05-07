# Rust Web Example
Ethan Davis<br>
Homework Repo for CS 410P - Rust Web Developement

<h1>To Build:</h1>
docker compose up --build

<h2>Routes:</h2>
index/<br>
questions/<br>
answers/<br>

<h2>Examples for using the Questions REST API:</h2>
<h4>Add Answer</h4>
curl --location --request POST 'http://localhost:3000/answers' --header 'Content-Type: application/json' --data-raw '{"id":2,"title":"New Answer 2","content":"Google it, dummy!","question_id":"1"}' 

<h4>Delete Answer</h4>
curl --location --request DELETE 'localhost:3000/answers/1' --header 'Content-Type: application/json'

<h4>Update Answer</h4>
curl --location --request PUT 'http://localhost:3000/answers/2' --header 'Content-Type: application/json' --data-raw '{"id":2,"title":"New Answer REDUX","content":"Google it, silly goose!","question_id":"1"}' 

<h4>Add Question</h4>
curl --location --request POST 'http://localhost:3000/questions' --header 'Content-Type: application/json' --data-raw '{"id":"2","title":"New Question","content":"How does this work again?","tags":["Rust","Webdev"]}'

<h4>Delete Question</h4>
curl --location --request DELETE 'localhost:3000/questions/3' --header 'Content-Type: application/json'

<h4>Update Question</h4>
curl --location --request PUT 'localhost:3000/questions/2' --header 'Content-Type: application/json' --data-raw '{ "id": "2", "title": "New Question!", "content": "Seriously please help I am going to die", "tags":["Rust","WebDev"]}'
