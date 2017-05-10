import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';

/**
 * @class Stores
 * @extends {EventEmitter}
 */

const CHANGE_EVENT = 'change';
class Stores extends EventEmitter {

  /**
   * Creates an instance of Stores
   * @memberof Stores
   */

  constructor() {
    super();
    this.news = [];
  }

  /**
   * @returns {array} returns list of news Sources
   * @memberof Store
   */
  getNews() {
    return this.news;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

const NewsStore = new Stores();

NewsDispatcher.register((payload) => {
  switch (payload.eventName) {
    case NewsActionTypes.GET_NEWS:
      NewsStore.news = payload.newsItem;
      NewsStore.emitChange();
      break;
    default:
      return true;
  }
});

export default NewsStore;
