import React, { Component } from 'react';
import SearchBarSuggestions from './search_bar_suggestions.js';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="searchBar col-xs-8 col-xs-offset-2">
        <input
          id="searchBar"
          list="doctorSearch"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <SearchBarSuggestions suggestions={this.props.suggestions} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

SearchBar.propTypes = {
  suggestions: PropTypes.array
};

export default SearchBar;