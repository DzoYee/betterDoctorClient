import React, { Component } from 'react';
import SearchBar from '../components/search_bar.js';
import DoctorList from '../components/doctor_list.js';

const hello = () => {
  return (
    <div>
      <h1>Hello from my React component!</h1>
      <SearchBar />
      <DoctorList />
    </div>
  )
}

export default hello;