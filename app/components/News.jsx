import React from 'react';
import PropTypes from 'prop-types';
import newsAction from '../actions/NewsActions';
import newsStore from '../stores/NewsStore';

/**
 * @desc represents News component
 *
 * @class News
 * @extends {React.Component}
 */

class News extends React.Component {
  /**
   * Creates an instance of News
   *
   * @memberof News
   */
  constructor(props) {
    super(props);
    const news = newsStore.getNews();
    this.state = {
      newslist: news,
    };
    this.onChangeNews = this.onChangeNews.bind(this);
    this.sortNews = this.sortNews.bind(this);
  }
   /**
   *
   * @desc represents a life cycle state of this component.
   * It updates the state of this component when it is rendered.
   *
   * @memberof Source
   */
  componentDidMount() {
    newsAction.getNews(this.props.params.id, '');
    newsStore.addChangeListener(this.onChangeNews);
  }
 /**
 * @function
 * @returns {object} array
 * @description update News state by listening for
 * change in the state of the News store.
 * */
  onChangeNews() {
    const news = newsStore.getNews();
    this.setState({ newslist: news.articles });
  }
    /**
   *
   * @desc passes parameters via route
   * @param {object} val sorttype is gotten from val as a parameter to sort news
   *
   * @memberof News
   */
  sortNews(val) {
    const sortValue = val.target.value;
    newsAction.getNews(this.props.params.id, sortValue);
  }

   /**
   *
   * @desc renders elements to the DOM
   *
   * @memberof News
   */

  render() {
    const sort = this.props.params.sort.split(',');
    return (
      <div className="container">
        <h2>{this.props.params.id}</h2>
        <div className="input-field col s12">Sort By:
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
News.defaultProps = {
  params: { sort: 'top' },
  newslist: [],
  id: '',
  sort: 'top',
};
News.propTypes = {
  id: PropTypes.string,
  sort: PropTypes.string,
};

module.exports = News;
