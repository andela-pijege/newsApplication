import keyMirror from 'keymirror';

/**
 * Define action constants
*/

// Define action constants
const NewsActionTypes = keyMirror({
  // get news headlines based on sources
  GET_SOURCES: null,
  // get news
  GET_NEWS: null,
});

export default NewsActionTypes;
