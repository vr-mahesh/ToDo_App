
'use strict';
module.exports = function (app) {
    const todoController = require('../controllers/todo-controller');
    // todo Routes for search and create.
    app.route('/todos')
        .get(todoController.list)
        .post(todoController.post);

    // todo Routes for get, update and delete.
    app.route('/todos/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);
};