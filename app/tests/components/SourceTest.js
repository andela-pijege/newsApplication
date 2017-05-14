import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import api from '../../api/NewsApi';
import Source from '../../components/Source';
import SourceStore from '../../stores/SourceStore';
import apiStub from './../apiStub';


chai.use(chaiEnzyme());

sinon.stub(api, 'getSource').callsFake(apiStub.getSource);
const sourceStoreSpy = sinon.spy(SourceStore, 'addChangeListener');
sinon.spy(Source.prototype, 'componentDidMount');
sinon.spy(Source.prototype, 'onChangeSource');
sinon.spy(Source.prototype, 'handleClick');

sinon.stub(SourceStore, 'getSource').callsFake(() => apiStub.getSource());

const wrapper = mount(<Source />);

describe('Test Source component', () => {
  after(() => {
    SourceStore.getSource.restore();
  });

  it('component should exist', () => {
    expect(wrapper).to.be.present();
    expect(sourceStoreSpy.calledOnce).to.be.true;
    expect(wrapper.state().sources);
  });

  it('component should contain one input field', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('component should have one child with the class name input-field', () => {
    expect(wrapper).to.have.exactly(1).descendants('.input-field');
  });

  it('renders html elements with the required props', () => {
    const sources = {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au',
      sortBysAvailable: [
        'top',
      ],
    };
    const component = mount(<Source source={sources} />);
    expect(component.contains(<span className="card-title">{sources.name}</span>)).to.equal(true);
    expect(component.contains(<p>{sources.description}</p>)).to.equal(true);
    expect(component.containsMatchingElement(
      <h5>{sources.category}</h5>)).to.equal(true);
  });
});
describe('Test if Source componenet members exist', () => {
  it('Source component mounted', () => {
    expect(Source.prototype.componentDidMount.calledOnce).toExist;
  });
  it('source component change event handlers exists', () => {
    expect(Source.prototype.onChangeSource.calledOnce).toExist;
  });
  it('source component handle click exist', () => {
    expect(Source.prototype.handleClick.calledOnce).toExist;
  });
});
