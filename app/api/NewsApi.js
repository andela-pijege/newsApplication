import Request from 'superagent';

// require('dotenv').config();

class Api {
  getSource(success, error) {
    const url = 'https://newsapi.org/v1/sources?language=en';
    return Request('GET', url).then(success, error);
  }

  getNews(source, sort, success, error) {
    const apikey = process.env.API_KEY;
    const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=${apikey}`;
    return Request('GET', url).then(success, error);
  }
}
const api = new Api();
export default api;
