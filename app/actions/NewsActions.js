import api from '../api/NewsApi';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const newsAction = {
  /**
   * @desc initiates call to api to get sources
   * then sends it through the dispatcher
   * to the store
   *
   * @memberof newsAction
   */
  getSources() {
    api.getSource((res) => {
      const newsSource = res.body;
      NewsDispatcher.dispatch({
        eventName: NewsActionTypes.GET_SOURCES,
        sourcesItem: newsSource,
      });
    },
    (error) => {
      throw window.alert(error);
    });
  },
   /**
   * @desc initiates call to api to get news
   * then sends it through the dispatcher
   * to the store
   *@param {string} source and sortby are both pased as string

   * @memberof newsAction
   */
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
