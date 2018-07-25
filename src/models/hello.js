'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HelloSchema = new Schema({
    statement: {
        type: String
    },
    name: {
        type: String
    }
});

let Hello = mongoose.model('Hello', HelloSchema);

module.exports = Hello;