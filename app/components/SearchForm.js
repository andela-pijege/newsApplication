import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="search" placeholder="Search For News Source" />
        </form>
      </div>
    );
  }
}

module.exports = SearchForm;
