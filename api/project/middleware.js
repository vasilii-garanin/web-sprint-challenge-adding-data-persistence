const Project = require('./model');

async function checkProjectNameUnique(req, res, next)
{
    try
    {
        const project_name = req.body.project_name;
        const exists = await Project.findByProjectName(project_name);
        if (exists)
        {
            next({ status: 400, message: `Resource name ${req.body.project_name} already exists` });
        }
        else
        {
            next();
        }
    }
    catch (err)
    {
        next(err);
    }
}

module.exports =
{
    checkProjectNameUnique
};