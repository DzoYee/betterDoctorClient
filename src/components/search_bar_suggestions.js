import React from 'react';
import SearchBarSuggestion from './search_bar_suggestion.js';

const SearchBarSuggestions = (props) => {
  console.log(props);
  let suggestions = "test";
  if (props.suggestions) {
    const suggestions = props.suggestions.map((suggestion) => {
      return (
        <SearchBarSuggestion />
      );
    });
  }
  return (
    <ul>
      {suggestions}
    </ul>
  );
};

export default SearchBarSuggestions;