import React from 'react';
import PropTypes from 'prop-types';

const SearchBarSuggestion = (props) => {
  return (
    <option className="autocomplete-suggestion"
      value={props.firstName + ' ' + props.lastName} />
  );
};

SearchBarSuggestion.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};


export default SearchBarSuggestion;