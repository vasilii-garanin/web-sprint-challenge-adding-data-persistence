const db = require('../../data/dbConfig');
async function getAll() 
{
    const projects = await db('projects')
        .select('project_id', 'project_name', 'project_description', 'project_completed');
    return projects;
}

async function get(project_id)
{
    const resource = await db('projects')
        .select('project_id', 'project_name', 'project_description')
        .where('project_id', project_id);

    return resource;
}

async function findByProjectName(project_name)
{
    const projectName = await db('projects')
        .select('project_name')
        .where('project_name', project_name)
        .first();

    return projectName;
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
    findByProjectName,
    get,
    add
};