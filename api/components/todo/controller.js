const httpCode = require('http-status-codes');
const todoService = require('./service');

const addTodo = (req, res) => {
  const { todoText } = req.body;

  try {
    const todos = todoService.addTodo(todoText);
    return res.json(todos);
  } catch (err) {
    console.error('Unable to add todo: %o', err);
    res.status(httpCode.INTERNAL_SERVER_ERROR);
    return res.json({ message: err.message });
  }
};

const completeTodo = (req, res) => {
  const { id } = req.params;

  try {
    const todos = todoService.completeTodo(id);
    return res.json(todos);
  } catch (err) {
    console.error('Unable to complete todo: %o', err);
    res.status(httpCode.BAD_REQUEST);
    return res.json({ message: err.message });
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  try {
    const todos = todoService.deleteTodo(id);
    return res.json(todos);
  } catch (err) {
    console.error('Unable to delete todo: %o', err);
    res.status(httpCode.BAD_REQUEST);
    return res.json({ message: err.message });
  }
};

const getTodos = (req, res) => {
  try {
    const todos = todoService.getTodos();
    return res.json(todos);
  } catch (err) {
    console.error('Unable to get todos: %o', err);
    res.status(httpCode.INTERNAL_SERVER_ERROR);
    return res.json({ message: err.message });
  }
};

module.exports = {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodos
};
