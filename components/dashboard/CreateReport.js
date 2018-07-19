import React, {Component} from 'react';

import LocalStorageService from "../../services/LocalStorageService";
import HTTPService from '../../services/HTTPService'

import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class CreateReport extends Component {

    constructor(props) {

        super(props);

        this.state = {
            "name": "",
            "dataSource": "",
            "dataSources" : [],
            "reportCreated": false
        };

        this.setName = this.setName.bind(this);
        this.setDataSource = this.setDataSource.bind(this);
        this.createReport = this.createReport.bind(this);
    }

    setName(event) {

        this.setState({name: event.target.value});
    }

    setDataSource(event) {

        this.setState({dataSource: event.target.value});
    }

    createReport() {

        let data = {
            "dataSource": this.state.dataSource
        };

        LocalStorageService.setItem("report", this.state.name, data);

        this.setState({reportCreated: true});
    }

    initCreateChart() {

        // HTTPService
        //     .get("data-source-list")
        //     .then((response) => {
        //
        //         alert(`Data Source List`);
        //
        //         this.dataSources = [
        //             {"name": "Test Pulse 1", "id": 123},
        //             {"name": "Test Pulse 2", "id": 456},
        //             {"name": "Test Pulse 3", "id": 789}
        //         ]
        //     });

        this.setState({
            dataSources: [
                {"name": "Test Pulse 1", "id": 123},
                {"name": "Test Pulse 2", "id": 456},
                {"name": "Test Pulse 3", "id": 789}
            ]
        });
    }

    componentDidMount() {

        this.initCreateChart();
    }

    render() {

        if (this.state.reportCreated === true) {

            return <Redirect to='/report' />
        }

        let dataSources = this.state.dataSources;

        let dataSourcesOptionItems = dataSources.map((dataSource) =>

            <option key={dataSource.id}>{dataSource.name}</option>
        );

        return (
            <Container>
                <Row>
                    <Col md={{ size: 3, offset: 6 }}>
                        <h3>Create Report</h3>
                        <Form onSubmit={this.createReport}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Name"
                                       value={this.state.name} onChange={this.setName} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Data source</Label>
                                <select value={this.state.dataSource} onChange={this.setDataSource}>
                                    {dataSourcesOptionItems}
                                </select>
                            </FormGroup>

                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}