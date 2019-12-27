import React from "react";
import ForecastChart from './Chart'
import {Card, makeStyles, Grow} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CitySelect from "./CitySelect";
import Grid from "@material-ui/core/Grid";
import { styled } from '@material-ui/core/styles';
import {dayShortFromUnix, dateFromUnix, dayFromUnix, hourFromUnix} from '../logic/timeUnixConverter';
import WeatherIcon from './WeatherIcon';
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
    title: {
        fontSize: 32,
    },

    subtitle: {
        fontSize: 22,
        marginBottom: 12
    },
});

const WeatherData = props => {
    const classes = useStyles();

    if(props.tempNow){
        return (
            <Grid container>
                <Grid item xs={3}>
                    <Typography className={classes.title}>
                        {props.city}, {props.country}
                    </Typography>
                    <Typography className={classes.subtitle} color="textSecondary">
                        {dayFromUnix(props.timeNow)}, {hourFromUnix(props.timeNow)} <br/>
                        <strong>{props.descriptionNow}</strong>
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <Degrees>
                        {Math.round(props.tempNow)}<sup>&#8451;</sup>
                    </Degrees>
                    <WeatherIcon
                        description={props.descriptionNow}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ForecastChart
                        forecastData={props.forecastData}
                    />
                </Grid>
            </Grid>
        )
    }
    return (<LinearProgress color="primary" size={24} style={{margin: '10rem'}}/>);
};

const WeatherCard = props => {
    if(props.errMess){
        return <StyledCard> {props.errMess} </StyledCard>;
    }

    return (
        <Grow in={true}>
            <StyledCard>
                <CitySelect
                    onChange={props.onChange}
                    value={props.city}
                    options={props.options}
                    style={{
                        width: 180,
                        position: 'absolute',
                        right: '4rem'
                    }}
                />
                <WeatherData {...props}/>
            </StyledCard>
        </Grow>

    );

};

export default WeatherCard;

const StyledCard = styled(Card)({
    padding: '4rem',
    position: 'relative'
});

const Degrees = styled(Typography)({
    fontSize: 80,
    flexGrow: 5,
});



