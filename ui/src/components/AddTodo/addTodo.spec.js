import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import AddTodo from '.';

configure({ adapter: new Adapter() });

it(`AddTodo renders with default props`, () => {
  const tree = render(
    <AddTodo
      addTodo={() => {}}
      setTodos={() => {}}
      setTodoText={() => {}}
      todoText=""
    />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it(`AddTodo renders with a text prop`, () => {
  const tree = render(
    <AddTodo
      addTodo={() => {}}
      setTodos={() => {}}
      setTodoText={() => {}}
      todoText="Todo"
    />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
