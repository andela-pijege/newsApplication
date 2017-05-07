import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Nav from '../../components/Nav';

describe('Test Nav component', () => {
  const wrapper = shallow(<Nav />);
  it('should contain a root node of div', () => {
    expect(wrapper.type()).toBe('div');
  });
});
