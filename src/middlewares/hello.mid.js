'use strict';

const logger = require('../utils/logger');

module.exports = () => {

    return (req, res, next) => {

        let isOk = true;

        // do st in middleware
        logger.log('hello.mid', 'Go to hello middleware');

        if (isOk) {
            // May be update req
            next();
        } else {
            return res.json({error: 'Error in Hello middleware.'});
        }

    }

};

