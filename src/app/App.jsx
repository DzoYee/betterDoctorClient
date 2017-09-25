import React, { Component } from 'react';
import SearchBar from '../components/search_bar.js';
import DoctorList from '../components/doctor_list.js';
import _ from 'underscore';
import betterDoctorHeader from '../assets/images/betterDoctorHeader.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      results: []
    };

    this.doctorSuggestions = this.doctorSuggestions.bind(this);
    this.doctorSearch = this.doctorSearch.bind(this);
  }

  render() {
    const doctorSuggestions = _.debounce((term) => { this.doctorSuggestions(term) }, 300);
    const doctorSearch = this.doctorSearch;
    return (
      <div className="search container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 header-wrapper">
            <img className="header-image" src={betterDoctorHeader} alt=""/>
          </div>
          <SearchBar
            onSearchTermChange={doctorSuggestions}
            doctorSearch={doctorSearch}
            suggestions={this.state.suggestions} />
          <DoctorList 
            results={this.state.results}/>
        </div>
      </div>
    );
  }

  doctorSuggestions(term) {
    fetch('http://localhost:8000/autocomplete/' + term)
    .then(res => res.json())
    .then(suggestions => {
      this.setState({
        suggestions: suggestions
      });
    });
  }

  doctorSearch(term) {
    fetch('http://localhost:8000/search/' + term)
    .then(res => res.json())
    .then(results => {
      this.setState({
        results: results
      });
    });
  }
};

export default App;