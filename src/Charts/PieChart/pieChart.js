import React from 'react';
import styles from './pieChart.css';
const google = window.google;
google.charts.load('current', {'packages':['corechart']});

class PieChart extends React.Component {
    constructor() {
        super();
    }

    drawChart(){
        let data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',    11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        let options = {
            title: 'My Daily Activities'
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

    componentDidMount() {
        google.charts.setOnLoadCallback(this.drawChart);
    }

    render() {
        return(
            <div id="piechart" className={styles.piechart}></div>
         );
    }

}
export default PieChart;