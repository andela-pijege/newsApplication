import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';

/**
 *
 * Represents Flux Store for news component.
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
   * @memberof Stores
   */
  getNews() {
    return this.news;
  }
  /**
   *
   * @description notify the news component of change in state.
   * @return {void}
   * @memberof Stores
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   *
   * @desc adds a listener that communicates state change to the news component.
   * @param {function} callback
   * @returns {void}
   * @memberof Stores
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
   /**
   *
   * @desc removes the listener added by addChangeListener,
   * terminates commincation with the news component.
   * @param {function} callback
   * @returns {void}
   * @memberof Stores
   */
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
