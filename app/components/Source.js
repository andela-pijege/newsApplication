import React from 'react';
import { hashHistory } from 'react-router';
import newsAction from '../actions/NewsActions';
import SourceStore from '../stores/SourceStore';
import Articles from '../components/Articles';


class Sources extends React.Component {
  constructor(props) {
    super(props);
    const sources = SourceStore.getSource();
    this.state = {
      newslist: sources,
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
    newsAction.getArticles(`${news.id}`);
    newsAction.getCurrent(news);
    hashHistory.push(`articles`);
  }

  render() {
    return (
      <div className="row">
        {/*<h1>Sources Page!!!</h1>*/}
        {this.state.newslist.map((news) => {
          return (
            <div className="col-sm-6 col-md-6">
              <div className="thumbnail" key={news.id} onClick={() => { this.handleClick(news); }} >
                <div className="caption">
                  <h3>{news.name}</h3>
                  <h4>{news.category}</h4>
                  <p>{news.description}</p>
                </div>
              </div>
          </div>);
        })}
      </div>
    );
  }
}

module.exports = Sources;
