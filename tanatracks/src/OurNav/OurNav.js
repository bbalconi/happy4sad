import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class OurNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header><Link className="nav-link" to="/">Home</Link></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><Link className="nav-link" to="/Login">Login</Link></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><Link className="nav-link" to="/SignUp">Sign Up</Link></DropdownItem>
            </DropdownMenu>
          </NavDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}