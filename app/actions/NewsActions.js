import Request from 'superagent';
import api from '../api/NewsApi';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const newsAction = {
  getSources() {
    api.getSource((res) => {
      const newsSource = JSON.parse(res.text);
      NewsDispatcher.dispatch({
        eventName: NewsActionTypes.GET_SOURCES,
        newsItem: newsSource,
      });
    },
    (err) => {
      throw err;
    });
  },
  getCurrent(data) {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_CURRENT,
      currentItem: data,
    });
  },
  getArticles(source) {
    api.getArticle(source, (res) => {
      const newsArticle = JSON.parse(res.text);
      NewsDispatcher.dispatch({
        eventName: NewsActionTypes.GET_ARTICLES,
        newsItem: newsArticle,
      });
    },
    (err) => {
      throw err;
    });
  },
  getNews(source, sort) {
    const apikey = '213327409d384371851777e7c7f78dfe';
    const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=${apikey}`;
    console.log(url);
    Request.get(url, (err, res) => {
      if (err) {
        throw err;
      } else {
        const news = JSON.parse(res.text);
        NewsDispatcher.dispatch({
          eventName: NewsActionTypes.GET_NEWS,
          newsItem: news,
        });
      }
    });
  },
};

export default newsAction;
