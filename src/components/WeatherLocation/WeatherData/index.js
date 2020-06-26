import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({ data }) => {
    const {temp , weatherState, humidity, speed} = data;
    
    return(
        <div className='weather-data'>
            <WeatherTemperature 
                temp={temp}
                weatherState={weatherState}
            / >
            <WeatherExtraInfo humidity={humidity} speed={speed}/>
        </div>
    );
};

export default WeatherData;