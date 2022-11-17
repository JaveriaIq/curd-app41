const TodoRepo = require('../repository/todoRepository')

class ToDoController{
    
    async getAll(request,response){
        const todoRepo = new TodoRepo();
        let res= await todoRepo.getAllTasks();
        response.json({
            todo: res.rows
        });
    }

    async createTask(request,response){
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createTaskRepo(request.body.id,request.body.task,request.body.done)
        response.json({
            "status":"task created"
        });
    }

    async updateTask(request,response){
        const todoRepo = new TodoRepo();
        let res = await todoRepo.updateTaskRepo(request.body.id,request.body.task,request.body.done)
        response.json({
            "status":"task updated"
        });
    }

    async deleteTask(request,response){
        const todoRepo = new TodoRepo();
        let res = await todoRepo.deleteTaskRepo(request.body.id)
        response.json({
            "status":"task delete"
        });
    }

}
module.exports = ToDoController;
