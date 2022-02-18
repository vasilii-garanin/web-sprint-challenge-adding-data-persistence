const express = require('express');

const ResourceRouter = require('./resource/router');
const ProjectRouter = require('./project/router');
const TaskRouter = require('./task/router');

const server = express();

const jsonErrorHandler = async (err, req, res, next) =>
{
    res.header("Content-Type", 'application/json');
    res.status(err.status).send(JSON.stringify(err));
};

server.use(express.json());
server.use('/api/resources', ResourceRouter);
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);
server.use(jsonErrorHandler);

module.exports = server;