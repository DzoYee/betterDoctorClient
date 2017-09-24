import React from 'react';
import DoctorListItem from './doctor_list_item.js';
import _ from 'underscore';
import PropTypes from 'prop-types';

const DoctorList = (props) => {
  const doctorItems = _.map(props.results, (doctor) => {
    return (
      <DoctorListItem 
        key={doctor.uid}
        firstName={doctor.first_name}
        lastName={doctor.last_name} 
        title={doctor.title}
        imageUrl={doctor.image_url} />
    );
  });

      // {doctorItems}
  return (
    <div className="col-xs-6 col-xs-offset-3 doctor_list_container">
        {doctorItems}
    </div>
  );
};

DoctorList.propTypes = {
  results: PropTypes.array.isRequired
}

export default DoctorList;