'use strict';

module.exports = function (app){
    
    var todoList = require('../controllers/todoController');
    
    app.route('/tasks')
            .get(todoList.all_tasks)
            .post(todoList.create_a_task);
    
    app.route('/tasks/:taskID')
            .get(todoList.read_a_task)
            .post(todoList.update_a_task)
            .delete(todoList.delete_a_task);
    
};