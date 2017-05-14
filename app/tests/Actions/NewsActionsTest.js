import { expect } from 'chai';
import sinon from 'sinon';
import NewsActions from '../../actions/NewsActions';
import NewsDispatcher from '../../dispatcher/NewsDispatcher';
import NewsActionTypes from '../../constants/NewsActionTypes';
import apiStub from './../apiStub';
import api from '../../api/NewsApi';

const sourceId = 'cnn';
const sortBy = 'top';
const getSources = NewsActions.getSources;
const getNews = NewsActions.getNews;


describe('News Action test', () => {
  it('it should return an object from api', () => {
    expect(NewsActions).to.exist;
    expect(NewsActions).to.not.equal(undefined);
  });
  it('should be an Action called getSources', () => {
    expect(getSources).to.not.equal(undefined);
  });
  it('should be an Action called getNews', () => {
    expect(getNews).to.not.equal(undefined);
  });
});
