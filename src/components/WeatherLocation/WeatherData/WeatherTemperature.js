import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const GetWeatherIcon = weatherState => {
    const sizeicon = '4x';

    if (weatherState)
        return <WeatherIcons className='wicon' name={weatherState} size={sizeicon}/>
    else
        return <WeatherIcons className='wicon' name={'day-sunny'} size={sizeicon}/>
}

const WeatherTemeprature = ({ temp, weatherState }) => (
    <div className='weather-temp'>
        { GetWeatherIcon(weatherState) }
        <span className='temperature'>{temp}</span>
        <span className='temperature-type'>{' °C'}</span>
    </div>
);

WeatherTemeprature.propTypes = {
    temp : PropTypes.number,
    weatherState: PropTypes.string
};

export default WeatherTemeprature;