# Rust Web Example
Ethan Davis<br>
Homework Repo for CS 410P - Rust Web Developement

To Build:
docker compose up --build

Examples for using the Questions REST API:
Add Answer
curl --location --request POST 'http://localhost:3000/answers' --header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'question_id=1' \                                      
--data-urlencode 'content=This is the answer.'

Add Question
curl --location --request POST 'http://localhost:3000/questions' \
--header 'Content-Type: application/json' \
--data-raw '{"id":"2","title":"New Question","content":"How does this work again?"}'

Delete Question
curl --location --request DELETE 'localhost:3000/questions/1' \                                                             
--header 'Content-Type: application/json'      

Update Question
curl --location --request PUT 'localhost:3000/questions/2' \
--header 'Content-Type: application/json' \
--data-raw '{
	"id": "2",
	"title": "NEW TITLE",
	"content": "OLD CONTENT"
}'

