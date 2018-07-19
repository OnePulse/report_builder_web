import React, {Component} from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Container, Row } from 'reactstrap';

import {ResponsivePie} from 'nivo'

export default class ChartResponsivePie extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={{ height: this.props.dims.height, width: this.props.dims.width }} className="chart">
                <Container>
                    <Row className="text-center">
                        <div className="top-toolbar">
                            <Nav pills>

                            </Nav>
                        </div>
                    </Row>
                </Container>
                <ResponsivePie
                    data={this.props.data}
                    margin={{
                        "top": 40,
                        "right": 80,
                        "bottom": 80,
                        "left": 80
                    }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors="nivo"
                    colorBy="id"
                    borderWidth={1}
                    borderColor="inherit:darker(0.2)"
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor="inherit"
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
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
                    defs={[
                        {
                            "id": "dots",
                            "type": "patternDots",
                            "background": "inherit",
                            "color": "rgba(255, 255, 255, 0.3)",
                            "size": 4,
                            "padding": 1,
                            "stagger": true
                        },
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "background": "inherit",
                            "color": "rgba(255, 255, 255, 0.3)",
                            "rotation": -45,
                            "lineWidth": 6,
                            "spacing": 10
                        }
                    ]}
                    fill={[
                        {
                            "match": {
                                "id": "ruby"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "c"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "go"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "python"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "scala"
                            },
                            "id": "lines"
                        },
                        {
                            "match": {
                                "id": "lisp"
                            },
                            "id": "lines"
                        },
                        {
                            "match": {
                                "id": "elixir"
                            },
                            "id": "lines"
                        },
                        {
                            "match": {
                                "id": "javascript"
                            },
                            "id": "lines"
                        }
                    ]}
                    legends={[
                        {
                            "anchor": "bottom",
                            "direction": "row",
                            "translateY": 56,
                            "itemWidth": 100,
                            "itemHeight": 18,
                            "symbolSize": 18,
                            "symbolShape": "circle"
                        }
                    ]}
                />
            </div>
        )
    }
}