import { expect } from 'chai';
import sinon from 'sinon';
import NewsActions from '../../actions/NewsActions';
import NewsDispatcher from '../../dispatcher/NewsDispatcher';
import apiStub from './../apiStub';
import api from '../../api/NewsApi';

const sourceId = 'cnn';
const sortBy = 'top';
const getSources = NewsActions.getSources;
const getNews = NewsActions.getNews;


describe('News Action test', () => {
  it('it should return an object from api', () => {
    expect(NewsActions).to.exist;
  });
  it('should be an Action called getSources', () => {
    expect(getSources).to.not.equal(undefined);
  });
  it('should be an Action called getNews', () => {
    expect(getNews).to.not.equal(undefined);
  });
});


// describe('getSource method using Promises', () => {
//   const spy = sinon.spy(NewsDispatcher, 'dispatch');
//   sinon.stub(api, 'getSource').callsFake(apiStub.getSource());

//   it('should load news data', () => {
//     console.log(spy);
//       // const mockDispatchCall = dispatchSpy.mock.calls[0][0];
//       // expect(dispatchSpy).toHaveBeenCalled();
//     // expect(getNews.callCount).to.equal(1);
//   });
// });
