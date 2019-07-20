import request from './request';

const addTodo = async (todoText, setTodos, setTodoText) => {
  const todos = await request.postRequest('todos', { todoText });
  setTodos(todos);
  setTodoText('');
};

const completeTodo = setTodos => async id => {
  const todos = await request.patchRequest(`todos:complete/${id}`);
  setTodos(todos);
};

const deleteTodo = setTodos => async id => {
  const todos = await request.deleteRequest(`todos/${id}`);
  setTodos(todos);
};

const getTodos = async setTodos => {
  const todos = await request.getRequest('todos');
  setTodos(todos);
};

export { addTodo, completeTodo, deleteTodo, getTodos };
