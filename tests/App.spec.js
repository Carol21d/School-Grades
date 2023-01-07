import { mount } from "@vue/test-utils";
import {describe , expect} from "vitest";
import App from '../src/App.vue';

describe.skip('App component', () => {
    test('should content a header', () => {


        const wrapper = mount(App);
        const appHeader = wrapper.find('header')
        const appHeading = wrapper.find('h1');
        const appHeaderClass = wrapper.find('header').attributes('class');


  expect(appHeader.html({raw:true})).toBe('<header class="header"><h1>School Grades</h1></header>');
  expect(appHeading.text()).toBe('School Grades');
  expect(appHeaderClass).toBe('header');


    });



});

