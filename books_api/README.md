![Structure of App](./public/structure.png)

[cheatSheet for state changes](https://state-updates.vercel.app/)

# data persistence with API requests
## Things we need to do
#### i)Create the API & understand how it works
#### ii)When app starts up,make a request to API to get the current list of books
#### iii)When user creates/edits/deletes a book,update the API, then update local data.


## API Request Flow
#### i)React App/UI/User Request for list of books to API Server
#### ii)API Server send back Response with list of books to  React App/UI/User


## JSON Server Setup
#### i)install JSON-Server with NPM at the terminal (npm install json-server)
#### ii)Create a db.json file.This is where data will be stored.
#### iii)create a command to run JSON-Server in package.json scripts("server":"json-server -p 3001 --watch db.json")#### iv)Run the command!(npm run server)


## It now takes two commands to start the project up
#### i)npm run start (starts the react dev server) 
#### ii)npm run server(starts JSON-Server)

## "json-server -p 3001 --watch db.json",
####  -p 3001 : changes the port the server listen to
#### --watch db.json : Tells the server to store data in the db.json file

## db.json  { "books" : [] } 
#### "books" : Tells json-server that we want to store a list of "books".
#### [] : Book objects will eventually show up here.

## API's

|  #  |  Goal   | URL | Method | Request Body | Response Body |
| :-: | :------------------: | :--------------------: |:-------:| :------------------------:| :--------------------------: |
| 01  |     Create Book      | localhost:3001/books   | POST    | { "title":"Hary Potter" } |{"id":1,"title":Harry Potter"}|
| 02  |     Get All Books    | localhost:3001/books   | GET     |            -              |{"id":1,"title":Harry Potter"}|
| 03  |     Update Books     | localhost:3001/books/1 | PUT     | { "title":"New Title" }   |{"id":1,"title":New Title"}   |
| 04  |     Delete Books     | localhost:3001/books/1 | DELETE  |            -              |{"id":1,"title":Harry Potter"}|

## Important Points
#### We need axios to make the api request to JSON server
#### so install axios (npm install axios)
