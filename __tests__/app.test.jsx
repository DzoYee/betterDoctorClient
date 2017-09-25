import React from 'react'
import { mount } from 'enzyme';
import App from '../src/app/App.jsx';
import SearchBar from '../src/components/search_bar.js';
import SearchBarSuggestions from '../src/components/search_bar_suggestions.js';
import DoctorList from '../src/components/doctor_list.js';
import DoctorListItem from '../src/components/doctor_list_item.js';

describe('App', () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App {...props} />
      );
    }
    return mountedApp;
  }

  beforeEach(() => {
    props = {
    };
    mountedApp = undefined;
  });

  it("always renders a 'SearchBar'", () => {
    expect(app().find(SearchBar).length).toBe(1);
  });

  describe("rendered 'SearchBar'", () => {
    it("receives suggestion as a prop", () => {
      const searchBar = app().find(SearchBar);
      expect(Object.keys(searchBar.props()).length).toBe(3);
    });
  });

  it("always renders a 'DoctorList'", () => {
    expect(app().find(DoctorList).length).toBe(1);
  });

  describe("rendered 'DoctorList'", () => {
    it("receives suggestion as a prop", () => {
      const doctorList = app().find(DoctorList);
      expect(Object.keys(doctorList.props()).length).toBe(1);
    });
  });
})