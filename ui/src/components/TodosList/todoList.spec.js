import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodosList from './';

configure({adapter: new Adapter()});

it(`TodoList renders with default props`, () => {
  const tree = render(<TodosList />);
  expect(toJson(tree)).toMatchSnapshot();
});

