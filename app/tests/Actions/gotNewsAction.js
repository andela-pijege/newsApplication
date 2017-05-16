import chai from 'chai';
import sinon from 'sinon';
import newsActions from '../../actions/NewsActions';
import NewsActionTypes from '../../constants/NewsActionTypes';
import dispatcher from '../../dispatcher/NewsDispatcher';

const expect = chai.expect;
const gotNews = newsActions.gotNews;

describe('The gotNews Action', () => {
  it('should be defined', () => {
    expect(gotNews).to.not.equal(undefined);
  });
});

const spy = sinon.spy();
dispatcher.register(spy);
const mockApiResponse = {
  body: {
    foo: 'bar',
  },
};
const actionPayload = {
  eventName: NewsActionTypes.GET_NEWS,
  newsItem: mockApiResponse.body,
};
gotNews(mockApiResponse);
describe('The gotNews Action', () => {
  it('should be fired at least once', () => {
    expect(spy.called).to.equal(true);
  });

  it('the spy should be called with the correct data', () => {
    expect(spy.calledWithExactly(actionPayload)).to.equal(true);
  });
});
