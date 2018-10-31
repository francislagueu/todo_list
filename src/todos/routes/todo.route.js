const router = require('express').Router();
const TodoController = require('../controllers/todo.controller');

router.route('')
    .get(TodoController.GetAllTodos)
    .post(TodoController.CreateTodo);
router.route('/:id')
    .get(TodoController.GetTodo)
    .put(TodoController.UpdateTodo)
    .delete(TodoController.DeleteTodo);

module.exports = router;