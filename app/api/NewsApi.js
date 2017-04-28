import Request from 'superagent';

class Api {
  getSource(succ, err) {
    const url = 'https://newsapi.org/v1/sources?language=en';
    return Request('GET', url).then(succ, err);
  }

  getArticle(source, succ, err) {
    const apikey = '213327409d384371851777e7c7f78dfe';
    const url = `https://newsapi.org/v1/articles?source=${source}&apiKey=${apikey}`;
    return Request('GET', url).then(succ, err);
  }

  getNews(source, sort, succ, err) {
    const apikey = '213327409d384371851777e7c7f78dfe';
    const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=${apikey}`;
    return Request('GET', url).then(succ, err);
  }
}
const api = new Api();
export default api;
