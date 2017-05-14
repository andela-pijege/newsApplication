import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import News from '../../components/News';
import NewsStore from '../../stores/NewsStore';


chai.use(chaiEnzyme());

sinon.spy(News.prototype, 'componentDidMount');
sinon.spy(News.prototype, 'onChangeNews');
sinon.spy(News.prototype, 'sortNews');

describe('Test News component', () => {
});

describe('Test if News componenet members exist', () => {
  it('News component mounted', () => {
    expect(News.prototype.componentDidMount.calledOnce).toExist;
  });
  it('News component change event handlers exists', () => {
    expect(News.prototype.onChangeNews.calledOnce).toExist;
  });
  it('News component sort news exist', () => {
    expect(News.prototype.sortNews.calledOnce).toExist;
  });
});
