import React from 'react';
import { hashHistory } from 'react-router';
import newsAction from '../actions/NewsActions';
import articleStore from '../stores/articleStore';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    const article = articleStore.getArticles();
    const current = articleStore.currentArticle();
    this.state = {
      newslist: article,
      current,
    };
    this.onChangeArticle = this.onChangeArticle.bind(this);
  }
  componentWillMount() {
    // newsAction.getArticles();
    articleStore.addChangeListener(this.onChangeArticle);
  }
  onChangeArticle() {
    const article = articleStore.getArticles();
    const current = articleStore.currentArticle();
    this.setState({ newslist: article.articles, current });
  }

  handleClick(event) {
    newsAction.getNews(`${this.state.current.id}`, `${event.target.value}`);
    console.log('fetching news', `${this.state.current.id}`, `${event.target.value}`);
    hashHistory.push('news');
  }

  getSortCategory(data) {
    return data.map((sort, index) => <option key={index + sort} value={sort}>{sort}</option>);
  }

  render() {
    return (
      <div>
        <h1>Articles Page!!!</h1>
        <div>
          <select className="form-control" onChange={(event) => { this.handleClick(event); }}>
            { (this.state.current) ?
							this.getSortCategory(this.state.current.sortBysAvailable)
							:
							''
						}
          </select>
        </div>
        <div className="row">
          {this.state.newslist.map(articles =>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <a href={articles.url} rel="noopener noreferrer" target="_blank">
                  <img src={articles.urlToImage} alt="..." />
                  <div className="caption">
                  <h3>{articles.title}</h3>
                  <p>{articles.description}</p>
                </div>
                </a>
              </div>
            </div>)}
        </div>
      </div>
    );
  }
}

module.exports = Articles;
