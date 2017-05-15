import chai from 'chai';
import sinon from 'sinon';
import newsActions from '../../actions/NewsActions';
import NewsActionTypes from '../../constants/NewsActionTypes';
import dispatcher from '../../dispatcher/NewsDispatcher';

const expect = chai.expect;
const gotSources = newsActions.gotSources;

describe('The gotSources Action', () => {
  it('should be defined', () => {
    expect(gotSources).to.not.equal(undefined);
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
  eventName: NewsActionTypes.GET_SOURCES,
  sourcesItem: mockApiResponse.body,
};
gotSources(mockApiResponse);
describe('The gotSources Action', () => {
  it('should be fired at least once', () => {
    expect(spy.calledOnce).to.equal(true);
  });

  it('the spy should be called with the correct data', () => {
    expect(spy.calledWithExactly(actionPayload)).to.equal(true);
  });
});
