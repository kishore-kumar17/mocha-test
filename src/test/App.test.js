import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import LoginForm from "../LoginForm";
import "jsdom-global/register";

configure({
  adapter: new Adapter(),
});

//normal app test...

describe("Test", () => {
  it("First test", () => {
    const wrapper = shallow(<App />);
    const message = <h1>Hello World...</h1>;
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper).to.contain(message);
  });
  chai.use(chaiEnzyme());
});

describe("login form test", () => {
  it("secound test",() => {
        const wrapper = shallow(<LoginForm />);

    //login button test
    const submitbutton = wrapper.find(".btn");
    expect(submitbutton.text()).to.be.eql("Login");
    //
    //reset button test
    const resetbutton = wrapper.find("#button");
    expect(resetbutton.text()).to.be.eql("Reset");

    // check email test

    const checkemail = wrapper.find("#email");
    expect(checkemail.type()).to.be.eql("input");
    expect(checkemail.getElement().props.type).to.be.eql("email");
    //  expect(checkemail.value).toBe("kishore");, (value = "kishore")

    //chack username test

    const usernamecheck = wrapper.find("#username");
    expect(usernamecheck.type()).to.be.eql("input");
    expect(usernamecheck.getElement().props.type).to.be.eql("text");
  });
  
  chai.use(chaiEnzyme());
});
