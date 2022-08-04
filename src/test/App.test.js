import React from 'react';
import { configure, shallow } from 'enzyme';
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
    // Test Two: A string explanation of what we're testing
    it('should test if (3-4)*8 = -8', function () {
      assert.equal(-8, (3 - 4) * 8);
    });
  });
});
