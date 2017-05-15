import api from '../api/NewsApi';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const newsAction = {
  gotSources(res) {
    const newsSource = res.body;
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_SOURCES,
      sourcesItem: newsSource,
    });
  },

  getSourcesFailed(error) {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_SOURCES_FAILED,
      message: 'Failed to load sources. Please try again.',
      cause: error.message,
    });
  },
  /**
   * @desc initiates call to api to get sources
   * then sends it through the dispatcher
   * to the store
   *
   * @memberof newsAction
   */
  getSources() {
    api.getSource(this.gotSources, this.getSourcesFailed);
  },

   /**
   * @desc initiates call to api to get news
   * then sends it through the dispatcher
   * to the store
   *@param {string} source and sortby are both pased as string

   * @memberof newsAction
   */
  gotNews(res) {
    const news = res.body;
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_NEWS,
      newsItem: news,
    });
  },
  getNewsFailed(error) {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_NEWS_FAILED,
      message: 'Failed to load News Please try again.',
      cause: error.message,
    });
  },
  getNews(source, sortby) {
    api.getNews(source, sortby, this.gotNews, this.getNewsFailed);
  },
};

export default newsAction;
