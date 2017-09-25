import React, { Component } from 'react';
import SearchBarSuggestions from './search_bar_suggestions.js';
import PropTypes from 'prop-types';
import _ from 'underscore';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: '',
      options: []
    };

    this.trackOptionsDebounce = _.debounce((term) => { this.trackOption(term) }, 200);
  }

  componentWillUpdate() {
    this.trackOptionsDebounce();
  }

  render() {
    return (
      <div className="search-bar col-xs-8 col-xs-offset-2">
        <form onSubmit = {event => this.onFormSubmit(event)} >
          <input
            id="search-bar"
            list="doctor-search"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </form>
        <SearchBarSuggestions suggestions={this.props.suggestions} />
      </div>
    );
  }

  trackOption() {
    let options = _.map(this.props.suggestions, (suggestion) => {
      return suggestion.first_name + ' ' + suggestion.last_name;
    });
    this.setState({options});
  }

  onInputChange(term) {
    if (term === '') { 
      this.setState({term});
    } else if (term != this.state.term && this.state.options.indexOf(term) > -1) {
      this.setState({term});
      this.onFormSubmit();
    } else {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
  }

  onFormSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.props.doctorSearch(this.state.term);
  }
}

SearchBar.propTypes = {
  suggestions: PropTypes.array
};

export default SearchBar;