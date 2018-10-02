const flickr = require('./src/flickr');
const config = require('./config/config');

const numOfResults = 'per_page=10';

flickr.queryParams(numOfResults, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(results.recentPhotos);
    }
});