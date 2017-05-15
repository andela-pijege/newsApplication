import keyMirror from 'keymirror';

/**
 * Define action constants
*/

// Define action constants
const NewsActionTypes = keyMirror({
  // get news headlines based on sources
  GET_SOURCES: null,
  GET_SOURCES_FAILED: null,
  // get news
  GET_NEWS: null,
  GET_NEWS_FAILED: null,
});

export default NewsActionTypes;
