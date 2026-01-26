# To-Do API Project

## Project Description
This is a simple RESTful API for managing tasks (To-Do list) built with Node.js and Express.  
It allows users to create, read, update, and delete tasks.

Supported operations:
- GET /tasks → Get all tasks
- POST /tasks → Add a new task
- PUT /tasks/:id → Update a task completely
- PATCH /tasks/:id → Update part of a task
- DELETE /tasks/:id → Delete a task


## How to Run the Server

1. Clone the repository:
git clone https://github.com/tungatiana/todo-api-express.git

2. Navigate into the project folder:
cd todo-api-express

3. Install dependencies:
npm install

4. Start the server:
npm run dev

The server will run at:
http://localhost:3000


## Postman Requests

Screenshots of API requests tested using Postman:

### GET All Tasks
![GET /tasks](screenshots/get-tasks.png)

### POST Add Task
![POST /tasks](screenshots/post-task.png)

### PUT Update Task
![PUT /tasks/:id](screenshots/put-task.png)

### PATCH Update Task
![PATCH /tasks/:id](screenshots/patch-task.png)

### DELETE Task
![DELETE /tasks/:id](screenshots/delete-task.png)

