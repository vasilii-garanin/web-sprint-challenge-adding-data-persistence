const Project = require('./model');

async function checkProjectName(req, res, next)
{
    try
    {
        const project_name = req.body.project_name;
        const exists = await Project.findByProjectName(project_name);
        
        if (!req.body.project_name || !req.body.project_name.trim())
        {
            next({ status: 400, message: "Project_name required" });
        } else if (exists)  
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
    checkProjectName
};