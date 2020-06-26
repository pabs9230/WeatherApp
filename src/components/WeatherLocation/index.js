import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import './style.css';

class WeatherLocation extends Component{
    constructor(props){
        super(props);

        const { city } = props;
        
        this.state = {
            city,
            data : null
        };
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        
        fetch(api_weather).then(resolve => resolve.json()).then(data => {
            const newWeather = transformWeather(data);

            this.setState({
                city: data.name,
                data : newWeather
            })
        });
    }

    componentDidMount() {
        this.handleUpdateClick();
    }
    

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("component did update");
    // }
    

    render(){
        const { onWeatherLocationClick } = this.props;
        const {city, data} =this.state;

        return (
            <div className='weather-location' onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData data={data}/> : <CircularProgress/>}
            </div>    
        ); 
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick : PropTypes.func
}

export default WeatherLocation;