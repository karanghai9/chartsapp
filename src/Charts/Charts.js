import React from 'react';
import PieChart from './PieChart/pieChart';
import GaugeChart from './GaugeChart/gaugeChart';
import BarChart from './BarChart/barChart';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Charts extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/pieChart">PieChart</Link>
                        </li>
                        <li>
                            <Link to="/gaugeChart">GaugeChart</Link>
                        </li>
                        <li>
                            <Link to="/barChart">BarChart</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path='/pieChart' component={PieChart}></Route>
                        <Route exact path='/gaugeChart' component={GaugeChart}></Route>
                        <Route exact path='/barChart' component={BarChart}></Route>
                    </Switch>
                </div>
            </Router>
         );
    }
}

export default Charts;