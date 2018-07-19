import React, {Component} from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Container, Row } from 'reactstrap';

export default class TopToolbar extends Component {
    // fires before component is mounted
    constructor(props) {

        // makes this refer to this component
        super(props);

        this.createChart = this.createChart.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownOpen: false
        };
    }

    createChart(event) {
        this.setState({email: event.target.value});
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
                            <NavItem>
                                <NavLink href="#" active>Link</NavLink>
                            </NavItem>
                            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink href="#">Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Another Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">Disabled Link</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Row>
            </Container>
        )
    }
}