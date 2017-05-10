import api from '../api/NewsApi';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const newsAction = {
  getSources() {
    api.getSource((res) => {
      const newsSource = JSON.parse(res.text);
      NewsDispatcher.dispatch({
        eventName: NewsActionTypes.GET_SOURCES,
        sourcesItem: newsSource,
      });
    },
    (error) => {
      throw window.alert(error);
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
    (error) => {
      throw window.alert(error);
    });
  },
};

export default newsAction;
