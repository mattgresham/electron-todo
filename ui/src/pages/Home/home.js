import React from 'react';
import TodosList from '../../components/TodosList';
import styles from './home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <TodosList />
    </main>
  );
}

export default Home;
