import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import Nav from '../../components/Nav';

chai.use(chaiEnzyme());
const wrapper = shallow(<Nav />);
describe('Test Nav component', () => {
  it('component should exist', () => {
    expect(wrapper).to.be.present();
  });
  it('component should have one direct child', () => {
    expect(wrapper.children()).to.have.length(1);
  });
  it('component should have the name and logo of the application in place', () => {
    expect(wrapper.find('.brand-logo')).to.have.html('<a href="/" class="brand-logo">News 24/7</a>');
  });
  it('component should have one child with the class name brand-logo', () => {
    expect(wrapper).to.have.exactly(1).descendants('.brand-logo');
  });
});
