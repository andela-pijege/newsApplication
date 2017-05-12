import React from 'react';
import propTypes from 'prop-types';
import { browserHistory } from 'react-router';
import newsAction from '../actions/NewsActions';
import SourceStore from '../stores/SourceStore';

/**
 * @desc represents Source component
 *
 * @class Source
 * @extends {React.Component}
 */

class Sources extends React.Component {
  /**
   * Creates an instance of Source
   *
   * @memberof Source
   */
  constructor(props) {
    super(props);
    const sources = SourceStore.getSource();
    this.state = {
      sourceslist: sources,
      search: '',
    };
    this.onChangeSource = this.onChangeSource.bind(this);
  }
  /**
   *
   * @desc represents a life cycle state of this component.
   * It updates the state of this component when it is rendered.
   *
   * @memberof Source
   */
  componentDidMount() {
    newsAction.getSources();
    SourceStore.addChangeListener(this.onChangeSource);
  }
  /**
 * @function
 * @returns {object} array
 * @description update source state by listening for
 * change in the state of the source store.
 * */
  onChangeSource() {
    const sources = SourceStore.getSource();
    this.setState({ sourceslist: sources.sources });
  }
  /**
   *
   * @desc passes parameters via route
   * @param {object} news news sources id and sorttype are passed as a string.
   *
   * @memberof Source
   */
  handleClick(news) {
    const id = news.id;
    const sort = news.sortBysAvailable;
    browserHistory.push(`news/${id}&${sort}`);
  }
  /**
   *
   * @desc gets search value
   * @param {event} event the event gets the value of the event
   *
   * @memberof Source
   */
  searchSource(event) {
    this.setState({ search: event.target.value });
  }
  /**
   *
   * @desc renders elements to the DOM
   *
   * @memberof Source
   */

  render() {
    const sourcesFilter = this.state.sourceslist.filter(source =>
    source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
    return (
      <div className="container">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input type="search" id="search" name="search" onChange={this.searchSource.bind(this)} placeholder="search for over 60 news sources" />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
        <div className="row">
          {sourcesFilter.map((news) => {
            return (
              <div key={news.id}>
                <div>
                  <div>
                    <div className="col s12 m4">
                      <div className="card small blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">{news.name}</span>
                          <h5>{news.category}</h5>
                          <p>{news.description}</p>
                        </div>
                        <div className="card-action">
                          <a onClick={() => { this.handleClick(news); }} className="waves-effect waves-light btn">VIEW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            );
          })}
        </div>
      </div>
    );
  }
}


module.exports = Sources;
