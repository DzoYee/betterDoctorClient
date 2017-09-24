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
      <div className="search container">
        <div className="row justify-content-center">
          <div className="col-xs-6 col-xs-offset-3">
            
          </div>
          <SearchBar
            onSearchTermChange={doctorSearch}
            suggestions={this.state.suggestions} />
          <DoctorList />
        </div>
      </div>
    );
  }
};

export default App;