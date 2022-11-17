const pool = require('../dbConn')
class TodoRepo {
   
    async getAllTasks() {
        return await pool.query('select * from public.test')
    }
    
        async createTaskRepo(id, task, done) {
            return await pool.query(`INSERT INTO public.test
            (id, task, done)
            VALUES($1, $2, $3)`,
            [id, task, done]);
        }
    
    async updateTaskRepo(id, task,done){
         await pool.query(`UPDATE public.test
            SET task = $2, done = $3 WHERE id = $1`,
            [id,task,done]);
           
    }

    async deleteTaskRepo(id){
      return await pool.query(`DELETE From public.test Where id=$1`,
   [id]);
          
   }
        
}
module.exports = TodoRepo;