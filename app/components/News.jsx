import React from 'react';
import PropTypes from 'prop-types';
import newsAction from '../actions/NewsActions';
import newsStore from '../stores/NewsStore';

/**
 * @desc represents News component
 * @class News
 * @extends {React.Component}
 */
class News extends React.Component {
  /**
   * @desc Creates an instance of News
   * @memberof News
   * @returns {void}
   * @param {object} props object inherited from superclass
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
   * @memberof Source
   * @returns {void}
   */
  componentDidMount() {
    newsAction.getNews(this.props.params.id, '');
    newsStore.addChangeListener(this.onChangeNews);
  }
 /**
 * @function
 * @returns {void}
 * @description update News state by listening for
 * change in the state of the News store.
 * @memberof News
 * */
  onChangeNews() {
    const news = newsStore.getNews();
    this.setState({ newslist: news.articles });
  }
    /**
   *
   * @desc passes parameters via route
   * @param {object} val represents sort type options and passed as
   * a param to sort news
   * @returns {void}
   * @memberof News
   */
  sortNews(val) {
    const sortValue = val.target.value;
    newsAction.getNews(this.props.params.id, sortValue);
  }

   /**
   *
   * @desc renders elements to the DOM
   * @returns {object} rendered html elements in the DOM
   * @memberof News
   */
  render() {
    if (!this.state.newslist) {
      return (<h4 className="container">ooPs!!! an error occured, Please reload your browser</h4>);
    }
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
                  <a className="waves-effect waves-light btn" href={news.url}
                  rel="noopener noreferrer" target="_blank">Read More</a>
                </div>
              </div>
            </div>
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
