const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let todos = [{id: 1, task: "Portfolio deploy cheyadam", completed: false}];

// Get Todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add Todo
app.post('/api/todos', (req, res) => {
  const newTodo = {id: todos.length + 1, task: req.body.task, completed: false};
  todos.push(newTodo);
  res.json(newTodo);
});

// Contact
app.post('/api/contact', (req, res) => {
  console.log(req.body);
  res.json({message: "Received"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
