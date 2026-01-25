const express = require('express');
const app = express();

// Middleware to read JSON
app.use(express.json());

// Sample tasks array
let tasks = [
  { id: 1, title: "Do homework", completed: false },
  { id: 2, title: "Clean room", completed: true },
  { id: 3, title: "Read Bible", completed: false }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.json(task);
});

app.patch('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (req.body.completed !== undefined) {
    task.completed = req.body.completed;
  }

  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
});


// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
