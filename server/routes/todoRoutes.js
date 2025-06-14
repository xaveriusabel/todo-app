const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/', controller.getTodos);
router.post('/', controller.addTodo);

module.exports = router;
