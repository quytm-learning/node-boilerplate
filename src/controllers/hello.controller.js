'use strict';

const api = require('express').Router();
const logger = require('../utils/logger');

module.exports = (config, service, middleware) => {

    const TAG = 'hello.controller';

    api.use('/', middleware.helloMiddleware);

    api.get('/', function (req, res) {

        // get some data from req
        let name = 'world';

        service.helloService.hello(name)
            .then(data => {
                logger.log(`${TAG}.hello`, `data = ${data}`);
                res.json(data);
            })
            .catch(error => {
                logger.error(`${TAG}.hello`, `error = ${error}`);
                res.json(error);
            })
    });


    return api;
};