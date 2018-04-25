import axios from 'axios';

const API_KEY='f8888deeabd1fbd9321a180cb7b13bb0';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FEATHER_WEATHER = 'FEATHER_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    console.log('Request:', request);
    return {
        type: FEATHER_WEATHER,
        payload: request
    };
}