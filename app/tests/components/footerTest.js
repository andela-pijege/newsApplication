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
  it('component should have class name', () => {
    expect(wrapper.find('footer')).to.have.className('page-footer');
    expect(wrapper.find('footer')).to.not.have.className('root');
  });
});
