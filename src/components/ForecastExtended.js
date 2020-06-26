import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';
import { api_key, get_forecast_url } from './../constants/app_constants';
import transformForecast from './../services/transformForecast';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temp : 10,
    humidity : 10,
    weatherState: 'cloud',
    speed: 20
};

class ForecastExtended extends Component{
    constructor(){
        super();

        this.state = { forecastData : null }
    }

    componentDidMount(){
        console.log("component did update");
        if(this.props.city){
            const url_forecast = `${get_forecast_url}?q=${this.props.city}&appid=${api_key}`;
            fetch(url_forecast).then( 
                res => res.json() 
            ).then(
                weatherData => {
                    const forecastData = transformForecast(weatherData);
                    console.log(weatherData);
                    //console.log(forecastData);
                    this.setState( { forecastData } )
                }
            );
        }
    }

    renderForecastItemDays(){
        // return days.map( (day) => (<ForecastItem key={day} weekDay={day} data={data}></ForecastItem>) );
        return <h1>Render Items</h1>
    }

    renderProgress(){
        return <h2>Loading forecast extended</h2>
    }
    
    render(){
        const {city} = this.props;

        return (
            <div>
                <h2 className='forecast-extended-title'>{city}</h2>
                {city ? this.renderForecastItemDays() : this.renderProgress()}
            </div>
        );
    }
}
// ForecastExtended.propTypes = {
//     city: PropTypes.string.isRequired
// };


export default ForecastExtended;