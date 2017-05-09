import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';

const CHANGE_EVENT = 'change';
class Stores extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

// Accessor method
  getSource() {
    return this.sources;
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
const SourceStore = new Stores();

// Register dispatcher callback
NewsDispatcher.register((payload) => {
  switch (payload.eventName) {
    case NewsActionTypes.GET_SOURCES:
      SourceStore.sources = payload.sourcesItem;
      SourceStore.emitChange();
      break;
    default:
      return true;
  }
});

export default SourceStore;
