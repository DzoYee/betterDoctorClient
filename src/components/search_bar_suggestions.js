import React from 'react';
import SearchBarSuggestion from './search_bar_suggestion.js';
import _ from 'underscore';
import PropTypes from 'prop-types';

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
    <div className="autocomplete-suggestions">
      <datalist id="doctor-search">
        {suggestions}
      </datalist>
    </div>
  );
};

SearchBarSuggestions.propTypes = {
  suggestions: PropTypes.array.isRequired
};

export default SearchBarSuggestions;