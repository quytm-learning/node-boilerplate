'use strict';

const express = require('express');
const logger = require('./utils/logger');
const config = require('./config/config.dev.json');
const database = require('./database');
const app = express();

new Promise((resolve, reject) => {
    database.connect(config)
        .then((msg) => {

            logger.log('app', `After connect to database, msg = ${msg}`);

            const bodyParser = require('body-parser');
            const services = require('./services');
            const middlewares = require('./middlewares')();
            const controllers = require('./controllers')(config, services, middlewares);

            const cors = require('cors');

            const port = process.env.PORT || config.PORT || 3000;

            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(cors());

            app.use(controllers);

            app.listen(port, (error) => {
                if (error) throw error;
                logger.log('app', `Listening on port ${port}`);
            });

            resolve();
        })
        .catch(reject);
});
