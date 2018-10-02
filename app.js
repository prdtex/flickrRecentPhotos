// import flickr api call and config file
const flickr = require('./src/flickr');
const config = require('./config/config');

// enter the numerical value of how many results you want to receive back in JSON format from flickr.js
const numOfResults = 'per_page=10';

// call queryParams function on flickr.js, receive back results and manipulate
flickr.queryParams(numOfResults, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(results.recentPhotos);
    }
});