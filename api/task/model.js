const db = require('../../data/dbConfig');

async function getAll() 
{
    const tasks = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_id', 'p.project_name', 'p.project_description');

    return tasks;
}

// async function get(task_id)
// {
//     const resource = await db('tasks')
//         .select('task_id', 'task_name', 'task_description', 'task_completed', 'project_id')
//         .where('task_id', task_id);

//     return resource;
// }

async function add(task)
{
    const [task_id] = await db('tasks').insert(task);
    // return getAll().where({task_id}).first();
    const newTask = await db('tasks')
        .where('task_id', task_id)
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_id')
        .first();
    return newTask;


}

module.exports =
{
    getAll,
    // get,
    add
};
