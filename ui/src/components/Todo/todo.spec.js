import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Todo from '.';

configure({ adapter: new Adapter() });

it(`Todo renders with default props`, () => {
  const tree = render(
    <Todo
      completeTodo={() => {}}
      deleteTodo={() => {}}
      id={1}
      isCompleted={false}
      text="Todo"
    />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it(`Todo renders with complete prop`, () => {
  const tree = render(
    <Todo
      completeTodo={() => {}}
      deleteTodo={() => {}}
      id={1}
      isCompleted
      text="Todo"
    />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
