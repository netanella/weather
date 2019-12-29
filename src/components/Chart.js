import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {Typography} from "@material-ui/core";
import {dayShortFromUnix, dateFromUnix, dayFromUnix, hourFromUnix} from '../logic/timeUnixConverter';

const formatXAxis = time => (dayFromUnix(time));

const CustomTooltip = props => {

    if (props.active && props.payload) { //tooltip active on user hover
        const temp = props.payload[0].value;
        const description = props.payload[0].payload.description;
        let emoji = '';

        if (temp < 15) emoji = <span role="img" aria-label="Freezing">🥶</span>;
        else if (temp < 30) emoji = <span role="img" aria-label="Nice">😀</span>;
        else if (temp >= 30) emoji = <span role="img" aria-label="Hot">🥵</span>;

        return (
            <div {...props}>
                <Typography variant="h6" className="intro"><strong>{temp}<sup>o</sup></strong></Typography>
                <Typography className="label">{dayShortFromUnix(props.label)}, {dateFromUnix(props.label)}, {hourFromUnix(props.label)} </Typography>
                <Typography>{description}</Typography>
                <h1>{emoji}</h1>
            </div>
        );
    }
    return null;
};

const RenderChart = (props) => {
    return (
        <div style={{ height: 400 }}>
            <ResponsiveContainer >
                <AreaChart
                    data={props.forecastData}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="dt"
                        interval={7}
                        tickFormatter={formatXAxis}
                        style={{fontFamily:'arial'}}
                    />
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip
                        content={
                            <CustomTooltip
                                description={props.forecastData.description}
                                style={{
                                    background: 'rgba(255,255,255,0.5)',
                                    padding: '10px',
                                }}
                            />}
                    />
                    <Area type="monotone" dataKey="temp" stroke="black" fillOpacity={1} fill="url(#colorUv)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RenderChart;