import React, { Component } from 'react';
import SearchBar from '../components/search_bar.js';
import DoctorList from '../components/doctor_list.js';
import _ from 'underscore';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
    };
  }

  doctorSearch(term) {
    fetch('http://localhost:8000/autocomplete/' + term)
    .then(res => res.json())
    .then(suggestions => {
      this.setState({
        suggestions: suggestions
      });
    });
  }

  render() {
    const doctorSearch = _.debounce((term) => { this.doctorSearch(term) }, 300);;
    return (
      <div>
        <h1>Hello from my React component!</h1>
        <SearchBar 
          onSearchTermChange={doctorSearch}
          suggestions={this.state.suggestions} />
        <DoctorList />
      </div>
    );
  }
};

export default App;