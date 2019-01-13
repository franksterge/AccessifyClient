import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  render() {
    return (
      <Navbar light expand="md">
          <NavbarBrand href="/" style= {{fontSize:'50px', fontFamily:'Lucida Bright', marginLeft:25}}> <img src={require("./pic2.png")} height="50" width="45" />
          Accessify</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar style= {{fontSize:'18px', fontFamily:'Lucida Bright',marginRight:20}}>
                <DropdownToggle nav caret>
                  <img src={require("./profile.png")} height="22" width="22" /> User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  <DropdownItem>
                    Setting
                  </DropdownItem>
                  <DropdownItem>
                    Help&Support
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Header;