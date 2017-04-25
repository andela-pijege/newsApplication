import keyMirror from 'keymirror';

// Define action constants
const NewsActionTypes = keyMirror({
  // get news headlines based on sources
  GET_SOURCES: null,
  // get news
  GET_NEWS: null,
  GET_ARTICLES: null,
});

export default NewsActionTypes;
