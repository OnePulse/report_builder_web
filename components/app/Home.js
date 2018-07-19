import React, {Component} from 'react';
import { Container, Row } from 'reactstrap';

export default class Home extends Component {
    // fires before component is mounted
    constructor(props) {

        // makes this refer to this component
        super(props);
    }

    render() {
        return (
            <Container>
                <Row className="text-center">
                    <h1 className="home-text">
                        Welcome to the Report Builder
                    </h1>
                </Row>
            </Container>
        )
    }
}