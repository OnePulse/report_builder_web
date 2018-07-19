import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import * as sessionActions from "../../redux/actions/sessionActions";
import {bindActionCreators} from "redux";

class Header extends Component {

    constructor(props) {

        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

        this.logOut = this.logOut.bind(this);
    }

    logOut(event) {

        event.preventDefault();

        this.props.actions.logOutUser();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        if (this.props.logged_in) {

            return (
                <header>
                    <Navbar color="faded" light expand="md">
                        <LinkContainer to="/">
                            <NavbarBrand>Report Builder</NavbarBrand>
                        </LinkContainer>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <LinkContainer to="/logout" onClick={this.logOut}>
                                        <NavLink>Logout</NavLink>
                                    </LinkContainer>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            )
        } else {

            return (
                <header>
                    <Navbar color="faded" light expand="md">
                        <LinkContainer to="/">
                            <NavbarBrand>Report Builder</NavbarBrand>
                        </LinkContainer>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <LinkContainer to="/login">
                                        <NavLink>Login</NavLink>
                                    </LinkContainer>
                                </NavItem>
                                <NavItem>
                                    <LinkContainer to="/register">
                                        <NavLink>Register</NavLink>
                                    </LinkContainer>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            )
        }
    }
}

function mapStateToProps(state, ownProps) {

    return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);