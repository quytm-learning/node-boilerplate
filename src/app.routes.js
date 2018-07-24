'use strict';

const express = require('express');
const router = express.Router();

const controllers = require('controllers');

/**
 * Register routes.
 */
router.all('/', (req, res) => res.send('Hello!'));
router.all('/ping', (req, res) => res.send('pong'));

/**
 * Users
 */
router.use('/', controllers);