import { EventEmitter } from 'events';
import assign from 'object-assign';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';
import BaseStore from './BaseStore';

const CHANGE_EVENT = 'change';
const SourceStore = assign({}, EventEmitter.prototype, {

  sources: [],


// Accessor method
  getSource() {
    return this.sources;
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

// Register dispatcher callback
NewsDispatcher.register((payload) => {
  switch (payload.eventName) {
    case NewsActionTypes.GET_SOURCES:
      SourceStore.sources = payload.newsItem;
      SourceStore.emitChange();
      break;
    default:
      return true;
  }
});



// class SourceStore extends BaseStore {
//   constructor() {
//     super();
//     this.subscribe(() => this.registerToActions.bind(this));
//     this.sources = null;
//   }

//   registerToActions(payload) {
//     switch (payload.eventName) {
//       case NewsActionTypes.GET_SOURCES:
//         console.log('store called');
//         this.sources = payload.newItem;
//         this.emitChange('source');
//         console.log('stores');
//         break;
//       default:
//         return true;
//     }
//   }

//   getSource() {
//     return this.sources;
//   }
// }

export default SourceStore;
