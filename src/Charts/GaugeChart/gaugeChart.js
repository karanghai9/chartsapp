import React from 'react';
import styles from './gaugeChart.css';
const google = window.google;
google.charts.load('current', {'packages':['gauge']});

class GaugeChart extends React.Component{
    constructor(){
        super();
    }

    drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);
        
        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('gaugechart'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 1300);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 2600);
    }

    componentDidMount(){
        google.charts.setOnLoadCallback(this.drawChart);
    }

    render(){
        return( 
            <div id="gaugechart" className={styles.gaugechart}></div>
         );
    }
}

export default GaugeChart;