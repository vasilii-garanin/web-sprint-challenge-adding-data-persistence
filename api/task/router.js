const express = require('express');
const Task = require('./model');

const router = express.Router();


router.get('/:project_id', (req, res, next) =>
{
    const { project_id } = req.params;

    Task.get(project_id)
        .then(task =>
        {
            res.status(200).json(task);
        })
        .catch(next);
});

router.get('/', (req, res, next) =>
{
    Task.getAll()
        .then(task =>
        {
            res.json(task);
        })
        .catch(next);
});

router.post('/', (req, res, next) =>
{
    const task = req.body;

    Task.add(task)
        .then(newTask =>
        {
            res.status(201).json(newTask);
        })
        .catch(next);
});

module.exports = router;
