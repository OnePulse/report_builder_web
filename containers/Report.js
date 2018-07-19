import React, {Component} from 'react';

import TopToolbar from '../components/report/TopToolbar';
import SideToolbar from '../components/report/SideToolbar';
import Chart from '../components/report/Chart';

export default class App extends Component {

    render() {
        return (
            <div>
                <TopToolbar />
                {/*<SideToolbar />*/}
                <Chart />
            </div>
        )
    }
}