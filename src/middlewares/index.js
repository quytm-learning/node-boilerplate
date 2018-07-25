'use strict';

module.exports = () => {
    return {
        helloMiddleware: require('./hello.mid')()
    }
};