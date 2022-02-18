
const Resource = require('./model');
async function checkResourceNameUnique(req, res, next)
{
    const exists = await Resource.exists(req.body.resource_name);



    if (exists === true)
    {
        next({ status: 400, message: `Resource name ${req.body.resource_name} already exists` });
    }
    else
    {
        next();
    }
}
module.exports =
{
    checkResourceNameUnique
};