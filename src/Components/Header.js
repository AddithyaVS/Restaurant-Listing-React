import React from 'react'
import {Nav,Container,Navbar} from "react-bootstrap"

function Header() {
  return (
<Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Menu</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
