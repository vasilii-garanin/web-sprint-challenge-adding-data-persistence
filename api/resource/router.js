const express = require('express');
const Resources = require('./model');
const { checkResourceNameUnique } = require('./middleware');
const router = express.Router();


router.get('/:id', (req, res, next) =>
{
    const { id } = req.params;

    Resources.get(id)
        .then(resource =>
        {
            res.status(200).json(resource);
        })
        .catch(next);
});

router.get('/', (req, res, next) =>
{
    Resources.getAll()
        .then(resources =>
        {
            res.json(resources);
        })
        .catch(next);
});

router.post('/', checkResourceNameUnique, (req, res, next) =>
{
    const resource = req.body;

    Resources.add(resource)
        .then(newResource =>
        {
            res.status(201).json(newResource);
        })
        .catch(next);
});

module.exports = router;

