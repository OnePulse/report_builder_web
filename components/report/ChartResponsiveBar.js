import React, {Component} from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Container, Row } from 'reactstrap';

import {ResponsiveBar} from 'nivo'

export default class ChartResponsiveBar extends Component {

    constructor(props) {

        super(props);

        this.state = {
            "layoutOpen": false,
            "layout": "horizontal",
            "groupModeOpen": false,
            "groupMode": "stacked"
        };

        this.setLayout = this.setLayout.bind(this);
        this.toggleLayout = this.toggleLayout.bind(this);
        this.setGroupMode = this.setGroupMode.bind(this);
        this.toggleGroupMode = this.toggleGroupMode.bind(this);
    }

    toggleLayout() {

        this.setState({layoutOpen: !this.state.layoutOpen});
    }

    setLayout(event) {

        this.setState({layout: event.target.value});
    }

    toggleGroupMode() {

        this.setState({groupModeOpen: !this.state.groupModeOpen});
    }

    setGroupMode(event) {

        this.setState({groupMode: event.target.value});
    }

    render() {
        return (
            <div style={{ height: this.props.dims.height, width: this.props.dims.width }} className="chart">
                <Container>
                    <Row className="text-center">
                        <div className="top-toolbar">
                            <Nav pills>
                                <Dropdown nav isOpen={this.state.layoutOpen} toggle={this.toggleLayout}>
                                    <DropdownToggle nav caret>
                                        Layout
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={this.setLayout} value="horizontal">Horizontal</DropdownItem>
                                        <DropdownItem onClick={this.setLayout} value="vertical">Vertical</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown nav isOpen={this.state.groupModeOpen} toggle={this.toggleGroupMode}>
                                    <DropdownToggle nav caret>
                                        Group Mode
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={this.setGroupMode} value="stacked">Stacked</DropdownItem>
                                        <DropdownItem onClick={this.setGroupMode} value="grouped">Grouped</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Nav>
                        </div>
                    </Row>
                </Container>
                <ResponsiveBar
                    data={this.props.data}
                    keys={[
                        "hot dog",
                        "burger",
                        "sandwich",
                        "kebab",
                        "fries",
                        "donut"
                    ]}
                    indexBy="country"
                    margin={{
                        "top": 50,
                        "right": 130,
                        "bottom": 50,
                        "left": 60
                    }}
                    padding={0.3}
                    layout={this.state.layout}
                    groupMode={this.state.groupMode}
                    colors="nivo"
                    colorBy="id"
                    defs={[
                        {
                            "id": "dots",
                            "type": "patternDots",
                            "background": "inherit",
                            "color": "#38bcb2",
                            "size": 4,
                            "padding": 1,
                            "stagger": true
                        },
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "background": "inherit",
                            "color": "#eed312",
                            "rotation": -45,
                            "lineWidth": 6,
                            "spacing": 10
                        }
                    ]}
                    fill={[
                        {
                            "match": {
                                "id": "fries"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "sandwich"
                            },
                            "id": "lines"
                        }
                    ]}
                    borderColor="inherit:darker(1.6)"
                    axisBottom={{
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "country",
                        "legendPosition": "center",
                        "legendOffset": 36
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "food",
                        "legendPosition": "center",
                        "legendOffset": -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[
                        {
                            "dataFrom": "keys",
                            "anchor": "bottom-right",
                            "direction": "column",
                            "translateX": 120,
                            "itemWidth": 100,
                            "itemHeight": 20,
                            "itemsSpacing": 2,
                            "symbolSize": 20
                        }
                    ]}
                    theme={{
                        "tooltip": {
                            "container": {
                                "fontSize": "13px"
                            }
                        },
                        "labels": {
                            "textColor": "#555"
                        }
                    }}
                />
            </div>
        )
    }
}