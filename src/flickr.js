// import request module and config file
const request = require('request');
const config = require('../config/config');

// pass in how many results you want, receive the JSON in a callback which is passed back to app.js
const queryParams = (numOfResults, callback) => {

    const apiKey = config.API_KEY;
    const format = config.reqFormat;
    const reqMethod = config.reqMethod;
    const perPage = numOfResults;

    // construct the url based on configs and how many results are requested
    const url = `https://api.flickr.com/services/rest/?method=${reqMethod}&${format}&${apiKey}&${perPage}&nojsoncallback=1`;

    request({
        uri: url,
        json: true
    }, (er, res, body) => {
        if (er) {
            callback(er);
        } else {
            callback(undefined, {
                recentPhotos: body.photos
            });
        };
    });
}

// export the module, provide access to app.js
module.exports = {
    queryParams
};