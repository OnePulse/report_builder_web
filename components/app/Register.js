import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class Register extends Component {
    // fires before component is mounted
    constructor(props) {

        // makes this refer to this component
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ size: 3, offset: 6 }}>
                        <h3>Register</h3>
                        <Form>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}