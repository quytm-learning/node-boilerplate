'use strict';

const api = require('express').Router();
const logger = require('../utils/logger');

module.exports = (config, service, middleware) => {

    const TAG = 'hello.controller';

    api.get('/', middleware.helloMiddleware, function (req, res) {

        let name = req.query.name || 'world';

        service.helloService.hello(name)
            .then(data => {
                logger.log(`${TAG}.hello`, `data = ${JSON.stringify(data)}`);
                res.json(data);
            })
            .catch(error => {
                logger.error(`${TAG}.hello`, `error = ${JSON.stringify(error)}`);
                res.json(error);
            })
    });

    api.get('/:name', middleware.helloMiddleware, function (req, res) {

        let name = req.params.name || 'world';

        service.helloService.hello(name)
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