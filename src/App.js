import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {cities} from "./logic/cities";

//components
import Title from "./components/Title";
import WeatherCard from "./components/WeatherCard";

//logic
import getWeather from "./logic/getWeather";

const defaultCity = 'Jerusalem';

const App = () => {

    const [state, setState] = useState({
        cityName: defaultCity,
        country: '',
        tempNow: '',
        timeNow: '',
        forecastData: '',
        errMess: ''
    });

    useEffect(() => {
        getWeather(state.cityName).then((data) => {
            setState({
                ...state,
                country: data.country,
                tempNow: data.tempNow,
                timeNow: data.timeNow,
                descriptionNow: data.descriptionNow,
                icon: data.icon,
                forecastData: data.forecastData,
                errMess: data.errMess
            })
        });
    }, [state.cityName]);

    return (
            <Grid container spacing={5} direction="row" justify="center">
                <Grid item xs={12}>
                    <Title/>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <WeatherCard
                        city={state.cityName}
                        country={state.country}
                        timeNow={state.timeNow}
                        tempNow={state.tempNow}
                        descriptionNow={state.descriptionNow}
                        icon={state.icon}
                        forecastData={state.forecastData}
                        options={cities}
                        errMess={state.errMess}
                        onChange={(e) => {
                            setState({cityName: e.target.value})
                        }}
                    />
                </Grid>
            </Grid>
    );
};

export default App;




