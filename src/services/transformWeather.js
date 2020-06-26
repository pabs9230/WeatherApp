import { icons } from './../constants/app_constants';

const getWeatherState = weather_data => {
    return icons[weather_data.weather[0].main];
}
const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    
    const data = {
        humidity,
        temp,
        speed,
        weatherState
    };

    return data;
}

export default transformWeather;