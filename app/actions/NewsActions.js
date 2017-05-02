import Request from 'superagent';
import api from '../api/newsApi';
import NewsActionTypes from '../constants/newsActionTypes';
import NewsDispatcher from '../dispatcher/newsDispatcher';

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
  getNews(source, sortby) {
    api.getNews(source, sortby, (res) => {
      const news = JSON.parse(res.text);
      NewsDispatcher.dispatch({
        eventName: NewsActionTypes.GET_NEWS,
        newsItem: news,
      });
    },
    (err) => {
      throw err;
    });
  },
};

export default newsAction;
