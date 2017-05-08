import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Nav from '../../components/Nav';

describe('Test Nav component', () => {
  const wrapper = shallow(<Nav />);
  it('should contain a root node of div', () => {
    expect(wrapper.type()).toBe('div');
  });
  it('should contain a root container with a class name', () => {
    // console.log(wrapper.node.props.className);
    expect(wrapper.node.props.className).toBe('navbar-fixed');
  });
});
