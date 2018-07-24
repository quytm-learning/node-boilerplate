'use strict';


exports.hello = (name) => {
    new Promise(((resolve, reject) => {
        resolve({data: `Hello ${name}`});
    }))
};