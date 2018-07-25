'use strict';

const router = require('express').Router();

const helloController = require('./controllers/hello.controller');

module.exports = () => {

    router.all('/', (req, res) => res.send('Hello!'));
    router.all('/ping', (req, res) => res.send('pong'));

    router.use('/hello', helloController());
    // Declaring another controllers

    return router;
};