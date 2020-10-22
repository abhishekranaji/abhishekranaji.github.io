import React from "react";
import Chart from "react-google-charts";
export default function Charts(data) {
    data = Object.values(data);
    const option = {
        hAxis: {
        title: 'Time',
        },
        vAxis: {
        title: 'Popularity',
        },}
    return (
        <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={option}
        rootProps={{ 'data-testid': '1' }}
        />
    );
}