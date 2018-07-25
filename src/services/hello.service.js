'use strict';


exports.hello = (name) => {
    return new Promise(((resolve, reject) => {
        resolve({data: `Hello ${name}`});
    }))
};