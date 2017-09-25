import React from 'react'
import { mount } from 'enzyme';
import SearchBar from '../src/components/search_bar.js';
import SearchBarSuggestions from '../src/components/search_bar_suggestions.js';

describe('SearchBar', () => {
  let props;
  let mountedSearchBar;
  const searchBar = () => {
    if (!mountedSearchBar) {
      mountedSearchBar = mount(
        <SearchBar {...props} />
      );
    }
    return mountedSearchBar;
  }

  beforeEach(() => {
    props = {
      onSearchTermChange: undefined,
      doctorSearch: undefined,
      suggestions: []
    };
    mountedSearchBar = undefined;
  });

  it("always renders a div", () => {
    const divs = searchBar().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = searchBar().find("div");
      
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(searchBar().children());
    });
  });

  it("always renders a 'SearchBarSuggestions'", () => {
    expect(searchBar().find(SearchBarSuggestions).length).toBe(1);
  });

  describe("rendered 'SearchBarSuggestions'", () => {
    it("receives suggestion as a prop", () => {
      const searchBarSuggestions = searchBar().find(SearchBarSuggestions);
      expect(Object.keys(searchBarSuggestions.props()).length).toBe(1);
    });
  });
})