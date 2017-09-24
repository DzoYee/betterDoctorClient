import React from 'react';

const SearchBarSuggestion = (props) => {
  return (
    <li>
      <div>{props.firstName + ' ' + props.lastName}</div>
    </li>
  );
};

export default SearchBarSuggestion;