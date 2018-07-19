import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class SideToolbar extends Component {
    // fires before component is mounted
    constructor(props) {

        // makes this refer to this component
        super(props);
    }

    render() {
        return (
            <div className="side-toolbar">
                <p>Side Toolbar</p>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
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
        )
    }
}