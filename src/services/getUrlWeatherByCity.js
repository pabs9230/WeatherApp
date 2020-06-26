import { get_weather_url, api_key } from './../constants/app_constants';

const getUrlWeatherByCity = city => {
    return `${get_weather_url}?q=${city}&appid=${api_key}&units=metric`;
};

export default getUrlWeatherByCity;