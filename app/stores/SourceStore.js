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
   * @memberof Store
   */

  constructor() {
    super();
    this.sources = [];
  }

  /**
   * @returns {array} returns list of news Sources
   * @memberof Store
   */

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
