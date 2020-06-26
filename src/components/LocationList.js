import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './style.css';


const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city)
    }
    
    const strToComponent = cities => cities.map( (city, index) => <WeatherLocation key={index} city={city} onWeatherLocationClick={() => handleWeatherLocationClick(city)}/> )
    
    return (
        <div className='location-list'>
            {strToComponent(cities)}
        </div>
    );

}


LocationList.propTypes =  {
    cities : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func
};

export default LocationList;