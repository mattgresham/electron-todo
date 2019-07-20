const router = require('express').Router();
const todoController = require('./controller');

router
  .route('/todos/:id?')
  .post(todoController.addTodo)
  .get(todoController.getTodos)
  .delete(todoController.deleteTodo);

router.route('/todos:complete/:id').patch(todoController.completeTodo);

module.exports = router;
