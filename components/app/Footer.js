import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {
    // fires before component is mounted
    constructor(props) {

        // makes this refer to this component
        super(props);
    }

    render() {
        return (
            <Container>
                <Row className="text-center">
                    <p className="footer-text">OnePulse - 2018</p>
                </Row>
            </Container>
        )
    }
}