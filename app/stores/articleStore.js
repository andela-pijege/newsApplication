import { EventEmitter } from 'events';
import assign from 'object-assign';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';
import BaseStore from './baseStore';


const CHANGE_EVENT = 'change';
const articleStore = assign({}, EventEmitter.prototype, {

  articles: [],
  current: null,
// Accessor method
  getArticles() {
    return this.articles;
  },

  currentArticle() {
    return this.current;
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

});

NewsDispatcher.register((payload) => {
  switch (payload.eventName) {
    case NewsActionTypes.GET_ARTICLES:
      articleStore.articles = payload.newsItem;
      articleStore.emitChange();
      break;
    case NewsActionTypes.GET_CURRENT:
      articleStore.current = payload.currentItem;
      articleStore.emitChange();
      break;
    default:
      return true;
  }
});

export default articleStore;
