import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import Source from '../../components/Source';

chai.use(chaiEnzyme());
const wrapper = shallow(<Source />);
describe('Test Source component', () => {
  it('component should exist', () => {
    expect(wrapper).to.be.present();
  });
  it('component should contain one input field', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('component should contain two icon tags', () => {
    expect(wrapper.find('i')).to.have.length(2);
  });
  it('component should have one child with the class name input-field', () => {
    expect(wrapper).to.have.exactly(1).descendants('.input-field');
  });
});
