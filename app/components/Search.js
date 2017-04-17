import React from 'react';
import SearchForm from './SearchForm';
import NewsMessage from './NewsMessage';
// var getNews = require('../api/NewsApi.js');

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1>Search For News</h1>
        <SearchForm />
        <NewsMessage />
      </div>
    );
  }
}

module.exports = Search;
