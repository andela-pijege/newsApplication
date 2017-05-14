import React from 'react';
import { mount } from 'enzyme';
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
  it('renders html elements with the required props', () => {
    const newslist = [
      {
        author: 'BBC Sport',
        title: 'Stoke City 1-4 Arsenal',
        description: 'Champions League-chasing Arsenal move within a point of fourth-placed Liverpool with a comfortable Premier League victory over Stoke.',
        url: 'http://www.bbc.co.uk/sport/football/39827551',
        urlToImage: 'http://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/17DBC/production/_96042779_ars-rex.jpg',
        publishedAt: '2017-05-13T19:01:56+00:00',
      },
    ];
  });
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
