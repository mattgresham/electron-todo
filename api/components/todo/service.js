const todos = [];
let currentId = 0;

const getNextId = () => {
  currentId += 1;
  return currentId;
};

const addTodo = text => {
  todos.push({ id: getNextId(), isCompleted: false, text });

  return todos;
};

const completeTodo = completedTodoId => {
  const completedTodoIndex = todos.findIndex(
    ({ id }) => completedTodoId === id.toString()
  );

  if (completedTodoIndex === -1) {
    throw new Error(
      `Could not find the requested todo id to complete: ${completedTodoId}`
    );
  }

  todos[completedTodoIndex].isCompleted = true;

  return todos;
};

const deleteTodo = deletedTodoId => {
  const deletedTodoIndex = todos.findIndex(
    ({ id }) => deletedTodoId === id.toString()
  );

  if (deletedTodoIndex === -1) {
    throw new Error(
      `Could not find the requested todo id to delete: ${deletedTodoId}`
    );
  }

  todos.splice(deletedTodoIndex, 1);

  return todos;
};

const getTodos = () => {
  return todos;
};

module.exports = {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodos
};
