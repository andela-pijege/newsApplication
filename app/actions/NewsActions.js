import axios from 'axios';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import SourcesContainer from '../configs/SourcesContainer';
import Api from '../utils/Api';

const NewsActions = {
  getNews: (...source) => {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_NEWS,
      newItem: source,
    });
  },

  getSources: () => {
    console.log('loading');
    Api.clearQuery();
    const feedSources = new SourcesContainer();
    axios.get(Api.apilink).then((response) => {
      if (response.status === 200) {
        const body = response.data;
        const sources = body.sources;
        console.log('I am ' + sources);
        sources.forEach((source) => {
          feedSources.add(source.id, source.name, source.description);
        });

        console.log('gets data');

        NewsDispatcher.dispatch({
          eventName: NewsActionTypes.GET_SOURCES,
          newItem: feedSources.get(),
        });

        console.log('registers data with dispatcher');
      }
    })
	.catch((error) => {
      console.log(error);
    });
  },
};

export default NewsActions;
