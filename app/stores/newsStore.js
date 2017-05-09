import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';

const CHANGE_EVENT = 'change';
class Stores extends EventEmitter {
  constructor() {
    super();
    this.news = [];
  }

// Accessor method
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
