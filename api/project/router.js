const express = require('express');
const Project = require('./model');
const { checkProjectName } = require('./middleware');
const router = express.Router();


router.get('/:id', (req, res, next) =>
{
    const { id } = req.params;

    Project.get(id)
        .then(project =>
        {
            res.status(200).json(project);
        })
        .catch(next);
});

router.get('/', (req, res, next) =>
{
    Project.getAll()
        .then(projects =>
        {
            res.json(projects);
        })
        .catch(next);
});

router.post('/', checkProjectName, (req, res, next) =>
{
    const project = req.body;

    Project.add(project)
        .then(newProject =>
        {
            res.status(201).json(newProject);   
        })
        .catch(next);
});

module.exports = router;

