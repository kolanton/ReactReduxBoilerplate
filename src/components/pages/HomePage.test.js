import React from "react";
import { mount } from "enzyme";
import expect from "expect";

import HomePage from "./HomePage";
import { Provider } from "react-redux";

// or like this if you're using the redux module
import configureMockStore from "redux-mock-store";
const fakeStore = configureMockStore()({ home: { title: "Home" } });

const setup = () => {
  const props = {};

  const wrapper = mount(
    <Provider store={fakeStore}>
      <HomePage {...props} />
    </Provider>
  );

  const Component = wrapper.find(HomePage);

  return {
    props,
    Component
  };
};

describe("HomePage UI Test", () => {
  it('Should have title "Home"', () => {
    const { Component } = setup();
    let text = Component.find("div.homeContainer");
    expect(text.text()).toEqual(1);
  });

  // it('save button is labled "Save" when not saving', () => {
  //     const wrapper = setup(false);
  //     expect(wrapper.find('input').props().value).toBe('Save');
  // });

  // it('save button is labled "Saving..." when not saving', () => {
  //     const wrapper = setup(true);
  //     expect(wrapper.find('input').props().value).toBe('Saving...');
  // });
});
