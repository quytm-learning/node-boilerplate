'use strict';

let mongoose = require('mongoose');
let Hello = mongoose.model('Hello');

exports.hello = (name) => {
    return new Promise(((resolve, reject) => {
        resolve({data: `Hello ${name}`});
    }))
};

exports.findAll = () => {
    return Hello.find();
};

exports.findByName = (name) => {
    return Hello.find({name: name});
};