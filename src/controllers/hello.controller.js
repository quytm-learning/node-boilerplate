'use strict';

const api = require('express').Router();
const logger = require('../utils/logger');
const helloService = require('../services/hello.service');
const helloMiddleware = require('../middlewares/hello.mid');

module.exports = () => {

    const TAG = 'hello.controller';

    api.get('/', helloMiddleware(), function (req, res) {

        // let name = req.query.name || 'world';

        // service.helloService.hello(name)
        helloService.findAll()
            .then(data => {
                logger.log(`${TAG}.hello`, `data = ${JSON.stringify(data)}`);
                res.json(data);
            })
            .catch(error => {
                logger.error(`${TAG}.hello`, `error = ${JSON.stringify(error)}`);
                res.json(error);
            })
    });

    api.get('/:name', helloMiddleware(), function (req, res) {

        let name = req.params.name || 'world';

        helloService.findByName(name)
            .then(data => {
                logger.log(`${TAG}.hello`, `data = ${JSON.stringify(data)}`);
                res.json(data);
            })
            .catch(error => {
                logger.error(`${TAG}.hello`, `error = ${JSON.stringify(error)}`);
                res.json(error);
            })
    });

    return api;
};