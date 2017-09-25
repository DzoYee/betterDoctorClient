import React from 'react';
import PropTypes from 'prop-types';

const DoctorListItem = (doctor) => {
  return (
    <div className="doctor-list-item">
      <div className="row">
        <div className="col-xs-12 doctor-item-header">{doctor.firstName + ' ' + doctor.lastName + ', ' +doctor.title} </div>
        <div className="col-xs-3 doctor-image-wrapper">
          <img src={doctor.imageUrl} />
        </div>
        <div className="col-xs-9 bio-wrapper">
          <span>{doctor.bio}</span>
        </div>
      </div>
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