import {API_KEY} from "./common";

const getWeather = async (cityName) => {
    try {
        const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&mode=json&units=metric&appid=${API_KEY}`);
        const weatherData = await weather.json(); //stringify
        const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&units=metric&appid=${API_KEY}`);
        const forecastData = await forecast.json(); //stringify
        console.log(weatherData);
        return {
            country: weatherData.sys.country,
            timeNow: weatherData.dt,
            tempNow: weatherData.main.temp,
            descriptionNow: weatherData.weather[0].description,
            forecastData: forecastData.list.map((o) => ({dt: o.dt, temp: o.main.temp})),
        };
    }
    catch(err){
        return {
            errMess: "ERROR: API connection failed"
        }
    }
};

export default getWeather;
