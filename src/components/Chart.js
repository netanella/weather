import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

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
                        <XAxis dataKey="dt" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
    );
};

export default RenderLineChart;