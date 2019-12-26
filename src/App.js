import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//components
import Title from "./components/Title";
import WeatherCard from "./components/WeatherCard";
import SimpleSelect from "./components/SimpleSelect";

//logic
import getWeather from "./logic/getWeather";
import {Card, makeStyles} from "@material-ui/core";
import { styled } from '@material-ui/core/styles';

const defaultCity = 'London';

const App = () => {

    const [state, setState] = useState({
        cityName: defaultCity,
        country: '',
        tempNow: '',
        timeNow: '',
        forecastData: '',
        errMess: ''
    });

    const cities = [
        { value: 'London'},
        { value: 'Jerusalem'},
        { value: 'New York'},
        { value: 'New Delhi'},
        { value: 'Haifa'}
    ];

    useEffect(() => {
        getWeather(state.cityName).then((data) => {
            setState({
                ...state,
                country: data.country,
                tempNow: data.tempNow,
                timeNow: data.timeNow,
                descriptionNow: data.descriptionNow,
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
                        forecastData={state.forecastData}
                        defaultValue={defaultCity}
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


