import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let tempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight];
        });
        setChartData(tempChartData);

    }, [props.parentEntries]);
    return (
        <Chart
        chartType= 'LineChart'
        data = {[["Date", "Weight"], ...chartData]}
        width = '100%'
        height = '400px'
        legendToggle 

        />
    );
}
 
export default EntriesChartTracker;

























/*
//This is hardcoded data to test with but now we have to use the useEffect and useState to accept and update the entry data. That code is above. 

    return (
        <Chart
        chartType= 'LineChart'
        data = {[["Date", "Weight"], ['2023-01-01', 275], ['2023-01-11', 176], ['2023-01-21', 165], ['2023-01-21', 165.98]   ]}
        width = '100%'
        height = '400px'
        legendToggle 

        />
    );
}
 
export default EntriesChartTracker;
*/
