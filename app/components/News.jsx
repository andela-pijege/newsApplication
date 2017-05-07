import React from 'react';
import newsAction from '../actions/NewsActions';
import newsStore from '../stores/NewsStore';


class News extends React.Component {
  constructor(props) {
    super(props);
    const news = newsStore.getNews();
    this.state = {
      newslist: news,
    };
    this.onChangeNews = this.onChangeNews.bind(this);
    this.sortNews = this.sortNews.bind(this);
  }
  componentDidMount() {
    newsAction.getNews(this.props.params.id, '');
    newsStore.addChangeListener(this.onChangeNews);
  }
  onChangeNews() {
    const news = newsStore.getNews();
    this.setState({ newslist: news.articles });
  }
  sortNews(val) {
    const sortValue = val.target.value;
    newsAction.getNews(this.props.params.id, sortValue);
  }

  render() {
    const sort = this.props.params.sort.split(',');
    return (
      <div className="container">
        <h2>{this.props.params.id.toUpperCase()}</h2>
        <div className="input-field col s12">
          <select onChange={this.sortNews} style={{ display: 'block' }}>
            {sort.map(sortValue => <option value={sortValue}>{sortValue}</option>)}
          </select>
        </div>
        <div className="row">
          {this.state.newslist.map(news => 
            <div className="col s12 m6" key={news.title}>
              <div className="card large">
                <div className="card-image">
                  <img src={news.urlToImage} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">{news.title}</span>
                  <p>{news.description}</p>
                </div>
                <div className="card-action">
                  <a className="waves-effect waves-light btn" href={news.url} rel="noopener noreferrer" target="_blank">Read More</a>
                </div>
              </div>
            </div>,
          )}
        </div>
      </div>
    );
  }
}

module.exports = News;
