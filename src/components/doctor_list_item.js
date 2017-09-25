import React from 'react';
import PropTypes from 'prop-types';

const DoctorListItem = (doctor) => {
  return (
    <div className="doctor-list-item">
      <div>{doctor.firstName}</div>
      <div>{doctor.lastName}</div>
      <div>{doctor.title}</div>
      <img src={doctor.imageUrl} />
    </div>
  );
};

DoctorListItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default DoctorListItem;