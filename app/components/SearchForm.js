import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="source" />
          <input type="text" placeholder="category" />
          <button>Get News</button>
        </form>
      </div>
    );
  }
}

module.exports = SearchForm;
