import React from 'react';
import SearchForm from './SearchForm';
import api from '../api/NewsApi';


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newslist: [],
    };
  }
  componentWillMount() {
    api.getSources().then((data) => {
      this.setState({
        newslist: data,
      });
    },
    );
  }
  render() {
    return (
      <div>
        <h1>News Page!!!</h1>
        <SearchForm />
        <ul>
          {this.state.newslist.map((news) => {
            return <li key={news.id}>{news.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

module.exports = News;
