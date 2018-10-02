const request = require('request');
const config = require('../config/config');

const queryParams = (numOfResults, callback) => {

    const apiKey = config.API_KEY;
    const format = config.reqFormat;
    const reqMethod = config.reqMethod;
    const perPage = numOfResults;

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

module.exports = {
    queryParams
};