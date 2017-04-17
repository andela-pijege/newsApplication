var axios = require('axios');


var source = 'cnn';
var sortby = 'top';
const NEWS_URL = 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=' + sortby + '&apiKey=213327409d384371851777e7c7f78dfe';
//'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=213327409d384371851777e7c7f78dfe'

module.exports = {
    getNews: function(source, sortby) {


        axios.get(NEWS_URL).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}