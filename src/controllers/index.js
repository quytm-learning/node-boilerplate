'use strict';

const router = require('express').Router();

const helloController = require('./hello.controller');


module.exports = (config, services, middlewares) => {

    router.all('/', (req, res) => res.send('Hello!'));
    router.all('/ping', (req, res) => res.send('pong'));

    router.use('/hello', helloController(config, services, middlewares));
    // Declaring another controllers

    return router;
};