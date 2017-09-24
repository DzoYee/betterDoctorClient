import React, { Component } from 'react';
import SearchBarSuggestions from './search_bar_suggestions.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="searchBar">
        <input
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

export default SearchBar;