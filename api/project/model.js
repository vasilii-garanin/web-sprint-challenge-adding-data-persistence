const db = require('../../data/dbConfig');
async function getAll() 
{
    const projects = await db('projects')
        .select('project_id', 'project_name', 'project_description', 'project_completed')
    return projects;
}

async function get(project_id)
{
    const resource = await db('projects')
        .select('project_id', 'project_name', 'project_description')
        .where('project_id', project_id);

    return resource;
}

async function add(project)
{
    return await db('projects')
        .insert(project)
        .then(([project_id]) => 
        {
            return get(project_id);
        });
}

module.exports =
{
    getAll,
    get,
    add
};