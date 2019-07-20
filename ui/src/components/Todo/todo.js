import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as IconDelete } from '../../images/delete.svg';
import styles from './todo.module.css';

const Todo = ({ completeTodo, deleteTodo, id, isCompleted, text }) => (
  <div className={styles.container}>
    <div>
      <input
        checked={isCompleted}
        className={styles.completedCheckbox}
        disabled={isCompleted}
        id={`todo-checkbox-${id}`}
        onChange={() => completeTodo(id)}
        type="checkbox"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
      <label className="sr-only" htmlFor={`todo-checkbox-${id}`}>
        Complete todo
      </label>
    </div>
    <span
      className={classnames(styles.text, {
        [styles.strikethrough]: isCompleted
      })}
    >
      {text}
    </span>
    <button
      className={styles.deleteButton}
      onClick={() => deleteTodo(id)}
      type="button"
    >
      <IconDelete title="Delete Todo" />
    </button>
  </div>
);

Todo.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
