import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

/**
 * @desc Represents Store for news component.
 * @class Stores
 * @extends {EventEmitter}
 */
class Stores extends EventEmitter {

  /**
   * @desc Creates an instance of Stores
   * @memberof Stores
   */
  constructor() {
    super();
    this.news = [];
    this.errorMessaage = '';
  }

  /**
   * @returns {object} returns list of news Sources
   * @memberof Stores
   */
  getNews() {
    if (!this.news) {
      return this.errorMessaage;
    }
    return this.news;
  }
  /**
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
    case NewsActionTypes.GET_SOURCES_FAILED:
      NewsStore.errorMessaage = payload.message;
      NewsStore.emitChange();
      break;
    default:
      return true;
  }
});

export default NewsStore;
