import Api from '../api/NewsApi';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const api = new Api();
const newsAction = {
   /**
   * @desc sends a payload to the dispatcher
   * when api call is successful
   * @returns {void}
   * @param {object} res the result we get after a successful call
   * @memberof newsAction
   */
  gotSources(res) {
    const newsSource = res.body;
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_SOURCES,
      sourcesItem: newsSource,
    });
  },
  /**
   * @desc sends an error message to the dispatcher
   * when api call fails
   * @returns {void}
   * @param {error} error is an error meassage ass a result of
   * failed api call
   * @memberof newsAction
   */
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
   * @returns {void}
   * @memberof newsAction
   */
  getSources() {
    Api.getSource(this.gotSources, this.getSourcesFailed);
  },
  /**
   * @desc sends a payload to the dispatcher
   * when api call is successful
   * @returns {void}
   * @param {object} res the result we get after a successful call
   * @memberof newsAction
   */
  gotNews(res) {
    const news = res.body;
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_NEWS,
      newsItem: news,
    });
  },
  /**
   * @desc sends an error message to the dispatcher
   * when api call fails
   * @returns {void}
   * @memberof newsAction
   * @param {error} error is an error meassage ass a result of
   * failed api call
   */
  getNewsFailed(error) {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_NEWS_FAILED,
      message: 'Failed to load News Please try again.',
      cause: error.message,
    });
  },

   /**
   * @desc initiates call to api to get news
   * then sends it through the dispatcher
   * to the store
   * @param {string} source is passed as a string
   * @param {string} sortby is passed as a string
   * @memberof newsAction
   * @returns {void}
   */
  getNews(source, sortby) {
    Api.getNews(source, sortby, this.gotNews, this.getNewsFailed);
  },
};

export default newsAction;
