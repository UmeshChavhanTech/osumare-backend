const express = require('express');
const app = express();
const tasks = require('./tasks');

app.use(express.json());
app.use('/tasks', tasks);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
