import React from 'react';
import PropTypes from 'prop-types';
import styles from './addTodo.module.css';

const AddTodo = ({ addTodo, todoText, setTodos, setTodoText }) => (
  <form
    className={styles.container}
    onSubmit={e => {
      e.preventDefault();
      addTodo(todoText, setTodos, setTodoText);
    }}
  >
    <input
      className={styles.textField}
      onChange={e => setTodoText(e.target.value)}
      placeholder="Enter something to do..."
      type="text"
      value={todoText}
    />
    <button className={styles.addButton} disabled={!todoText} type="submit">
      Add
    </button>
  </form>
);

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todoText: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
  setTodoText: PropTypes.func.isRequired
};

export default AddTodo;
