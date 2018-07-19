import React, {Component} from 'react';

import * as sessionActions from '../../redux/actions/sessionActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

class Login extends Component {
    // fires before component is mounted
    constructor(props) {

        // makes this refer to this component
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setEmail(event) {

        this.setState({email: event.target.value});
    }

    setPassword(event) {

        this.setState({password: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();

        this.props.actions.logInUser(this.state);
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col md={{ size: 3, offset: 6 }}>
                        <h3>Login</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="email"
                                       value={this.state.email} onChange={this.setEmail} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="password"
                                       value={this.state.password} onChange={this.setPassword} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch) {

    return {

        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Login);