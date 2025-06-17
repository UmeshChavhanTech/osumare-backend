const express = require('express');
const router = express.Router();
let tasks = [];
let idCounter = 1;

// GET all
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET by ID
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST new
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).json({ error: 'Title and description are required' });

  const newTask = { id: idCounter++, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update
router.put('/:id', (req, res) => {
  const { title, description } = req.body;
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  if (!title || !description) return res.status(400).json({ error: 'Title and description required' });

  task.title = title;
  task.description = description;
  res.json(task);
});

// DELETE
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
