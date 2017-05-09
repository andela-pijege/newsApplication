import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import Footer from '../../components/Footer';

chai.use(chaiEnzyme());
const wrapper = shallow(<Footer />);
describe('Test Footer component', () => {
  it('component should exist', () => {
    expect(wrapper).to.be.present();
  });
  it('should have one direct child', () => {
    expect(wrapper.children()).to.have.length(1);
  });
  it('component should have class name', () => {
    expect(wrapper.find('footer')).to.have.className('page-footer');
  });
  it('component should a have a tag with a class name `footer-copyright`', () => {
    expect(wrapper.find('.footer-copyright')).be.present();
  });
  it('component should have two tags with class of container', () => {
    expect(wrapper).to.have.exactly(2).descendants('.container');
  });
});
