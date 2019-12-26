import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Text
} from 'recharts';
import {Typography} from "@material-ui/core";
import {dayShortFromUnix, dateFromUnix, dayFromUnix, hourFromUnix} from '../logic/timeUnixConverter';

const CustomXAxisTick = props => {
    return (<Text {...props}>{dayFromUnix(props.payload.value)}</Text>
    );
};

const CustomTooltip = props => {

    if (props.active && props.payload) {
        let temp = props.payload[0].value;
        let emoji = '';

        if (temp < 15) emoji = <span role="img" aria-label="Freezing">🥶</span>;
        else if (temp < 30) emoji = <span role="img" aria-label="Nice">😀</span>;
        else if (temp >= 30) emoji = <span role="img" aria-label="Hot">🥵</span>;

        return (
            <div {...props}>
                <Typography variant="h6" className="intro"><strong>{temp}<sup>o</sup></strong></Typography>
                <Typography className="label">{dayShortFromUnix(props.label)}, {dateFromUnix(props.label)}, {hourFromUnix(props.label)} </Typography>
                <h1>{emoji}</h1>
            </div>
        );
    }
    return null;
};

const RenderLineChart = (props) => {

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={props.forecastData}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="dt"
                        tick={
                            <CustomXAxisTick
                                style={{
                                    fontFamily: "Arial",
                                    fontWeight: 500
                                }}
                            />
                        }
                    />
                    <YAxis />
                    <Tooltip
                        content={
                            <CustomTooltip
                                style={{
                                    background: 'rgba(255,255,255,0.5)',
                                    padding: '10px',
                                }}
                            />}
                    />
                    <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RenderLineChart;