'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const cors = require('cors');

const config = require('./config/config.dev.json');
const controllers = require('./controllers');
const services = require('./services');
const middlewares = require('./middlewares')();

const app = express();
const port = process.env.PORT || config.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(controllers(config, services, middlewares));

app.listen(port, () => {
    logger.log('app', `Listening on port ${port}`);
});