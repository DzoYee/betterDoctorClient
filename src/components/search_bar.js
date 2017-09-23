import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }
    
  render() {
    return (
      <div>
        <input type="text" value={this.state.term} />
      </div>
    );
  }
}

export default SearchBar;