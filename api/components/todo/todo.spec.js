const controller = require('./controller');
const res = {
  json: value => JSON.stringify(value),
  status: code => ({
    json: value => {
      code, value;
    }
  })
};

it('Add a todo', () => {
  const req = { body: { todoText: 'Test todo' } };

  expect(controller.addTodo(req, res)).toBe(
    res.json([{ id: 1, isCompleted: false, text: req.body.todoText }])
  );
});

it('Complete a todo', () => {
  const req = { body: { todoText: 'Test todo' }, params: { id: '1' } };

  expect(controller.completeTodo(req, res)).toBe(
    res.json([{ id: 1, isCompleted: true, text: req.body.todoText }])
  );
});

it('Wrong id to complete a todo', () => {
  const req = { body: { todoText: 'Test todo' }, params: { id: '-1' } };

  expect(controller.completeTodo(req, res)).toBe(
    res.json({
      message: 'Could not find the requested todo id to complete: -1'
    })
  );
});

it('Delete a todo', () => {
  const req = { body: { todoText: 'Test todo' }, params: { id: '1' } };

  controller.addTodo(req, res);
  expect(controller.deleteTodo(req, res)).toBe(
    res.json([{ id: 2, isCompleted: false, text: req.body.todoText }])
  );
});

it('Wrong id to delete a todo', () => {
  const req = { body: { todoText: 'Test todo' }, params: { id: '-1' } };

  controller.addTodo(req, res);
  expect(controller.deleteTodo(req, res)).toBe(
    res.json({ message: 'Could not find the requested todo id to delete: -1' })
  );
});
