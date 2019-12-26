import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Text
} from 'recharts';
import {Typography} from "@material-ui/core";
import { styled } from '@material-ui/core/styles';
import {dayShortFromUnix, dateFromUnix, dayFromUnix, hourFromUnix} from '../logic/timeUnixConverter';

const CustomXAxisTick = props => {
    return <Text {...props}>{props.labelFormatter(props.payload.value)}</Text>;
};

function CustomTooltip({ payload, label, active }) {
    if (active && payload) {
        return (
            <StyledTooltip>
                <Typography className="intro"><strong>{payload[0].value}<sup>o</sup></strong></Typography>
                <Typography className="label">{dayShortFromUnix(label)}, {dateFromUnix(label)}, {hourFromUnix(label)} </Typography>
            </StyledTooltip>
        );
    }
    return null;
}

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
                                    fontWeight: 500,
                                }}
                                labelFormatter={dayFromUnix}
                            />
                        }
                    />

                    <YAxis />
                    <Tooltip
                        content={<CustomTooltip />}
                    />
                    <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RenderLineChart;

const StyledTooltip = styled('div')({
   background: 'rgba(255,255,255,0.5)',
    padding: '10px'
});