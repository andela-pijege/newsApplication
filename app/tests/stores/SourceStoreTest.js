import { expect } from 'chai';
import SourceStore from '../../stores/SourceStore';
import NewsDispatcher from '../../dispatcher/NewsDispatcher';
import NewsActionTypes from '../../constants/NewsActionTypes';
import { Source } from '../TestData';

describe('Test Source Store', () => {
  const sourcesItem = Source;
  it('Source Store should initialize with no data', () => {
    const emptyStore = SourceStore.getSource();
    expect(emptyStore).to.be.empty;
  });
  it('Source Store should recieve dispached data', () => {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_SOURCES,
      sourcesItem,
    });
    expect(SourceStore.getSource()).to.equal(sourcesItem);
    expect(SourceStore.getSource()[0].id).to.equal('abc-news-au');
  });
});
