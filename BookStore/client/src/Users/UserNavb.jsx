import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './UserNavb.css'

const UserNavb = () => {
  return (
    <div>
      <Navbar expand="lg" className='userNav' >
                <Container style={{width:'87rem',marginLeft:'205px'}}>
                    <Navbar.Brand href="#home">LItJuNcTiOn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/cartView/:bookId" className='userNavLink'>Cart</Nav.Link>
                            <Nav.Link href="#link" className='userNavLink' >Orders</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default UserNavb
