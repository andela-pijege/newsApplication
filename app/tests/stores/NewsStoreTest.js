import { expect } from 'chai';
import NewsStore from '../../stores/NewsStore';
import NewsDispatcher from '../../dispatcher/NewsDispatcher';
import NewsActionTypes from '../../constants/NewsActionTypes';
import { News } from '../TestData';

describe('News Store Test', () => {
  const newsItem = News;

  it('News Store should initialize with no data', () => {
    expect(NewsStore.getNews()).to.be.empty;
  });
  it('News Store should recieve dispatched data', () => {
    NewsDispatcher.dispatch({
      eventName: NewsActionTypes.GET_NEWS,
      newsItem,
    });
    const result = NewsStore.getNews();
    expect(result[10]).to.be.undefined;
    expect(result[1].title).to.equal(newsItem[1].title);
  });
});
