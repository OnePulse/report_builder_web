import React, {Component} from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Container, Row } from 'reactstrap';

export default class ChartControls extends Component {

    constructor(props) {

        super(props);

        this.setChartType = this.setChartType.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            "chartType": "ChartResponsiveBar",
            "dropdownOpen": false
        };
    }

    setChartType(event) {

        this.setState({chartType: event.target.value});

        this.props.chartTypeCallback(event.target.value);
    }

    toggle() {

        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Container>
                <Row className="text-center">
                    <div className="top-toolbar">
                        <Nav pills>
                            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav caret>
                                    Chart type
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={this.setChartType} value="ChartResponsiveBar">Bar Chart</DropdownItem>
                                    <DropdownItem onClick={this.setChartType} value="ChartResponsivePie">Pie Chart</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </div>
                </Row>
            </Container>
        )
    }
}