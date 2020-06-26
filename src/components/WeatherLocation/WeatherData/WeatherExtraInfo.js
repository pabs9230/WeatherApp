import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, speed }) => (
    <div className='weather-extra-info'>
        <span className='extra-info-text'>{`Humedad: ${humidity} %`}</span>
        <span className='extra-info-text'>{`Vientos: ${speed} m/s`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number,
    speed: PropTypes.number,
};

export default WeatherExtraInfo;