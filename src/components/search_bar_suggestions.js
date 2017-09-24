import React from 'react';
import SearchBarSuggestion from './search_bar_suggestion.js';
import _ from 'underscore';

const SearchBarSuggestions = (props) => {
  const suggestions = _.map(props.suggestions, (doctor) => {
    return (
      <SearchBarSuggestion 
        key={doctor.uid}
        firstName={doctor.first_name}
        lastName={doctor.last_name}
      />
    );
  });

  return (
    <ul>
      {suggestions}
    </ul>
  );
};

export default SearchBarSuggestions;