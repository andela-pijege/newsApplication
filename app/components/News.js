import React from 'react';
import newsAction from '../actions/NewsActions';
import newsStore from '../stores/newsStore';


class News extends React.Component {
  constructor(props) {
    super(props);
    const news = newsStore.getNews();
    this.state = {
      newslist: news,
    };
    this.onChangeNews = this.onChangeNews.bind(this);
  }
  componentWillMount() {
    newsAction.getNews();
    newsStore.addChangeListener(this.onChangeNews);
  }
  onChangeNews() {
    const news = newsStore.getNews();
    this.setState({ newslist: news.news });
  }

  render() {
    return (
      <div>
        <h1>News Page!!!</h1>
        <div>{this.state.newslist}</div>
      </div>
    );
  }
}

module.exports = News;
