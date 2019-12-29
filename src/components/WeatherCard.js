import React from "react";
import ForecastChart from './Chart'
import {Card, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CitySelect from "./CitySelect";
import Grid from "@material-ui/core/Grid";
import {styled} from '@material-ui/core/styles';
import {dayFromUnix, hourFromUnix} from '../logic/timeUnixConverter';
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
    title: {
        fontSize: 32,
    },

    subtitle: {
        fontSize: 22,
        marginBottom: 12
    },
});

const DisplayWeather = props => {
    const classes = useStyles();

    if(props.tempNow && props.country && props.descriptionNow){ //loading complete
        return (
            <>
                <Grid container item xs={12} sm={7} >
                    <Grid item xs={6} sm>
                        <Typography className={classes.title}>
                            {props.city}<Hidden smDown>, {props.country}</Hidden>
                        </Typography>
                        <Typography className={classes.subtitle} color="textSecondary">
                            {dayFromUnix(props.timeNow)}, {hourFromUnix(props.timeNow)} <br/>
                            <strong>{props.descriptionNow}</strong>
                        </Typography>
                    </Grid>
                    <Grid item><Degrees>{Math.round(props.tempNow)}<sup>&#8451;</sup></Degrees></Grid>
                    <Hidden smDown>
                        <Grid item><img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon" width="150px"/></Grid>
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <ForecastChart
                        forecastData={props.forecastData}
                    />
                </Grid>
            </>
        )
    }
    return (<CircularProgress />);
};

const WeatherCard = props => {
    if(props.errMess){
        return <StyledCard> {props.errMess} </StyledCard>;
    }

    return (
        <StyledCard>
            <Grid container direction="row-reverse" justify="space-between">
                <Grid item xs={12} sm={2}>
                    <CitySelect
                        onChange={props.onChange}
                        value={props.city}
                        options={props.options}
                        style={{
                            width: '100%'
                        }}
                    />
                </Grid>
                <DisplayWeather {...props}/>
            </Grid>
        </StyledCard>
    );

};

export default WeatherCard;

const StyledCard = styled(Card)({
    padding: '5%',
    position: 'relative'
});

const Degrees = styled(Typography)({
    fontSize: 80,
});



