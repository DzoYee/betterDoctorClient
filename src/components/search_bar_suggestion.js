import React from 'react';

const SearchBarSuggestion = (props) => {
  return (
    <option className="autocomplete-suggestion" 
      value={props.firstName + ' ' + props.lastName} />
  );
};

export default SearchBarSuggestion;