import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({city}) => (
    <div className='location-cont'><h2>{city}</h2></div>
);

Location.propTypes = {
    city: PropTypes.string,
}
export default Location;