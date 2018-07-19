import React, {Component} from 'react';
import { Container, Row } from 'reactstrap';

import HTTPService from "../../services/HTTPService";
import ChartResponsiveBar from "./ChartResponsiveBar";
import ChartResponsivePie from "./ChartResponsivePie";
import ChartControls from "./ChartControls";

//TODO: Remove test data
import chartData from "../../test/data/chartData";

export default class Chart extends Component {

    constructor(props) {

        super(props);

        this.state = {
            "chartType": "ChartResponsiveBar",
            "dataBar": {},
            "dimsBar": {"height": "30em", "width": "60em"},
            "dataPie": {},
            "dimsPie": {"height": "30em", "width": "60em"},
        };
    }

    initChart() {

        // HTTPService
        //     .initChart(this.state)
        //     .then((response) => {
        //
        //         //TODO: Redirect
        //         alert(`New Message with id ${response.id} created!`);
        //     });

        this.setState({dataBar: chartData.barData});
        this.setState({dataPie: chartData.pieData});
    }

    componentDidMount() {

        this.initChart();
    }

    chartTypeCallback = (chartType) => {

        this.setState({chartType: chartType});
    };

    render() {

        switch(this.state.chartType) {

            case 'ChartResponsivePie':

                return (
                    <Container>
                        <Row className="text-center">
                            <ChartControls chartTypeCallback={this.chartTypeCallback} />
                            <ChartResponsivePie data={this.state.dataPie} dims={this.state.dimsPie} />
                        </Row>
                    </Container>
                );

            case 'ChartResponsiveBar':
            default:

                return (
                    <Container>
                        <Row className="text-center">
                            <ChartControls chartTypeCallback={this.chartTypeCallback} />
                            <ChartResponsiveBar data={this.state.dataBar} dims={this.state.dimsBar} />
                        </Row>
                    </Container>
                );
        }
    }
}