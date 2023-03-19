const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const PORT = 3001;

app.use(cors());
app.use(express.json());

const todos = [
  {
    id: uuidv4(),
    label: "Fix an ability to display all tasks",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to add a new task",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];

app.get("/todos", (req, res) => res.json(todos));

app.post("/todos", (req, res) => {
  const { label } = req.body;
  todos.push({ id: uuidv4(), label, checked: false });
  res.json(todos);
});

app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id == id);
  todo.checked = !todo.checked;
  res.json(todos);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
  res.json(todos);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
