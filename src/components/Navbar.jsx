import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../assets/png/user.png'
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
  DropdownItem,
} from "reactstrap"

const NavbarComponent = () => {
    const [toggle,setToggle] = useState(false)
    const [isOpen,setIsOpen] = useState(true)
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <strong style={{ fontSize: "22px" }}>
            SUST<span className="text-warning">PC</span>
          </strong>
        </NavbarBrand>
        <NavbarToggler className="ml-auto" onClick={() => setToggle(!toggle)} />
        <Collapse isOpen={toggle} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default NavbarComponent
