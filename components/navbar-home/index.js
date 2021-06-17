import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

export default function index() {


  // Toggle handler
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
        {/* <img src="/icon/TransJawa.png" style={{width:'53px', height:'200px'}} /> */}
      <Container className="container-navbar" fluid={true}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src="/icon/TransJawa.png"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" href="/">Lowongan</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Informasi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Info Perusahaan</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Masuk</NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
      </Container>
    </>
  );
}
