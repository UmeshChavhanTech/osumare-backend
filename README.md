##  Backend (Node.js + Express)

### Folder: osumare-backend

###  Project Summary
A simple RESTful API for task management built with Node.js and Express. Data is stored in memory (no database used).

###  Features
- Full CRUD operations: Create, Read, Update, Delete
- RESTful API design
- Basic input validation
- Clean JSON responses with proper status codes

### How to Run Backend Locally
bash
cd osumare-backend
npm install
node app.js


###  API Base URL

http://localhost:3000


###  API Endpoints
| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /tasks         | Get all tasks            |
| GET    | /tasks/:id     | Get task by ID           |
| POST   | /tasks         | Create a new task        |
| PUT    | /tasks/:id     | Update an existing task  |
| DELETE | /tasks/:id     | Delete a task            |

### Tech Used
- Node.js
- Express.js
