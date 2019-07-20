import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo';
import Todo from '../Todo';
import {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodos
} from '../../services/todo';
import styles from './todosList.module.css';

const TodosList = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos(setTodos);
  }, []);

  return (
    <div className={styles.todoList}>
      <h1 className={styles.heading}>To Do List</h1>
      <hr className={styles.line} />
      <div className={styles.todoContainer}>
        <div>
          {todos.map(todo => (
            <Todo
              {...todo}
              key={todo.id}
              completeTodo={completeTodo(setTodos)}
              deleteTodo={deleteTodo(setTodos)}
            />
          ))}
        </div>
      </div>
      <AddTodo {...{ addTodo, setTodos, setTodoText, todoText }} />
    </div>
  );
};

export default TodosList;
