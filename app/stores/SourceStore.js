import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

/**
 * @desc Represents Flux Store for Source component.
 *
 * @class Stores
 * @extends {EventEmitter}
 */
class Stores extends EventEmitter {

  /**
   * Creates an instance of Stores
   * @memberof Store
   */
  constructor() {
    super();
    this.sources = [];
    this.errorMessaage = '';
  }

  /**
   * @returns {object} returns list of news Sources
   * @memberof Store
   */
  getSource() {
    if (!this.sources) {
      return this.errorMessaage;
    }
    return this.sources;
  }
  /**
   *
   * @description notify the source component of changes in state.
   * @returns {void}
   * @memberof SourceStore
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   *
   * @desc adds a listener that notifies state change to the source component.
   * @param {function} callback listens for state update request from the source component.
   * @returns {void}
   * @memberof SourceStore
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
    /**
   *
   * @desc removes the listener added by addChangeListener,
   * terminates commuincation with the sources componennt.
   * @param {function} callback listens for request from the source
   * component to stop state update.
   * @returns {void}
   * @memberof SourceStore
   */
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
    case NewsActionTypes.GET_SOURCES_FAILED:
      SourceStore.errorMessaage = payload.message;
      SourceStore.emitChange();
      break;
    default:
      return true;
  }
});

export default SourceStore;
