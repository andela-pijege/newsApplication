import React from 'react';
import { browserHistory } from 'react-router';
import newsAction from '../actions/newsActions';
import SourceStore from '../stores/sourceStore';


class Sources extends React.Component {
  constructor(props) {
    super(props);
    const sources = SourceStore.getSource();
    this.state = {
      newslist: sources,
      search: '',
    };
    this.onChangeSource = this.onChangeSource.bind(this);
  }
  componentWillMount() {
    newsAction.getSources();
    SourceStore.addChangeListener(this.onChangeSource);
  }
  onChangeSource() {
    const sources = SourceStore.getSource();
    this.setState({ newslist: sources.sources });
  }
  handleClick(news) {
    const id = news.id;
    const sort = news.sortBysAvailable;
    browserHistory.push(`news/${id}&${sort}`);
  }
  searchSource(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const sourcesFilter = this.state.newslist.filter(source => source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
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
