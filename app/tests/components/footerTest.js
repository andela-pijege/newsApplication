import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Footer from '../../components/Footer';

describe('Test Footer component', () => {
  const wrapper = shallow(<Footer />);
  // it('should exist', () => {
  //   expect(wrapper).to.exist();
  //   expect(wrapper).to.be.present();
  // });
  describe('should have an html element called ', () => {
    it('div', () => {
      expect(wrapper.type()).toBe('div');
    });
    it('footer', () => {
      expect(wrapper.node.props.children.type).toBe('footer');
    });

    it('div', () => {
      expect(wrapper.node.props.children.props.className).toBe('page-footer  blue-grey darken-4');
    });
  });
});
