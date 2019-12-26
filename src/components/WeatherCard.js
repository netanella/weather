import React from "react";
import LineChart from './Chart'
import {Card, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SimpleSelect from "./SimpleSelect";
import Grid from "@material-ui/core/Grid";
import { styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        fontSize: 32,
    },
    subtitle: {
        fontSize: 22,
        marginBottom: 12
    },
});

const WeatherCard = (props) => {
    const classes = useStyles();

    if(props.errMess){
        return <StyledCard> {props.errMess} </StyledCard>;
    }

    return (
        <StyledCard>
            <Grid container>
                <Grid item xs={3}>
                    <Typography className={classes.title}>
                        {props.city}, {props.country}
                    </Typography>
                    <Typography className={classes.subtitle} color="textSecondary">
                        {props.timeNow} <br/>
                        {props.descriptionNow}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Degrees>
                        {Math.round(props.tempNow)}<sup>&#8451;</sup>
                    </Degrees>
                </Grid>
                <Grid item xs={7}>
                    <SimpleSelect
                        onChange={props.onChange}
                        defaultValue={props.defaultValue}
                        options={props.options}
                    />
                </Grid>
                <Grid item xs={12}>
                    <LineChart
                        forecastData={props.forecastData}
                    />
                </Grid>
            </Grid>
        </StyledCard>
    );

};

export default WeatherCard;

const StyledCard = styled(Card)({
    padding: '4rem'
});

const Degrees = styled(Typography)({
    fontSize: 80
});



