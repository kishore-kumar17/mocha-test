import 'jsdom-global/register';
import React from 'react';
import { configure, mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import { assert } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Form from '../Form';
configure({
  adapter: new Adapter(),
});

describe('Testin <App/> Component', () => {
  it('App renders a Form', () => {
    const wrapper = shallow(<App />);
    const message = <Form />;
    expect(wrapper).to.contain(message);
    expect(wrapper.find(Form)).length(1);
  });
  chai.use(chaiEnzyme());
});

describe('Testin <Form/> Component', () => {
  it('check if form has input tag and button text"', () => {
    const wrapper = shallow(<Form />);
    const button = wrapper.find('.button');
    const input = wrapper.find('.name');
    const email = wrapper.find('.email');
    // wrapper.find('.name').at(0).simulate('onChange');
    // input.simulate('change', { target: { value: 'Changed' } });
    // input.simulate('change', { props: { value: 'Changed' } });
    expect(button.text()).to.be.eql('Submit');
    expect(input.type()).to.be.eql('input');
    expect(email.type()).to.be.eql('input');
    expect(input.getElement().props.type).to.be.eql('text');
    expect(email.getElement().props.type).to.be.eql('email');
    console.log('test', input.at(0).getElement());
    expect(input.at(0).getElement().props.value).to.equal('testValue');
    // expect(email.getElement()).data.length(2);
  });
  chai.use(chaiEnzyme());
});

describe('Basic test', function () {
  describe('Array & multiplication', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
      // expect([1, 2, 3].indexOf(4)).;
    });
    it('should return 0 when the value is 1', function () {
      assert.equal(0, [1, 2, 3].indexOf(1));
    });
    it('should test if 3*3 = 9', function () {
      assert.equal(9, 3 * 3);
    });
    it('should test if (3-4)*8 = -8', function () {
      assert.equal(-8, (3 - 4) * 8);
    });
  });
});
