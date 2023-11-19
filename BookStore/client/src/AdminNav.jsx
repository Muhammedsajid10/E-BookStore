// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './AdminNav.css'



// const AdminNav = () => {

//   return (

//     <div className='container-nav' >
//       <h1 className='headingNav'>LiTjUnCtIoN</h1>

//       <Navbar expand="lg" className='navb'>
//         <Container>
          
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//             <div  className='NavLinkDiv'>
//               <Nav.Link href="/adminLogin" className="admin">Admin</Nav.Link>
//               <NavDropdown title="User" id="basic-nav-dropdown" data-bs-theme="dark" className="user"  style={{color:'white'}}>
//                 <NavDropdown.Item href="/userSignup" >SingnUP</NavDropdown.Item>
//                 <NavDropdown.Item href="/userLogin">Login</NavDropdown.Item>
//               </NavDropdown>
//               </div>
              
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//     </div>

//   )                 
// }

// export default AdminNav


























import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './AdminNav.css';

const AdminNav = () => {
  return (
    <div className='container-nav'>
      <h1 className='headingNav'>LiTjUnCtIoN</h1>
      <Navbar expand="lg" className='navb'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className='NavLinkDiv'>
                <Nav.Link href="/adminLogin" className="admin">Admin</Nav.Link>
                <NavDropdown title="User" id="basic-nav-dropdown" data-bs-theme="dark" className="user" style={{ color: 'white' }}>
                  <NavDropdown.Item href="/userSignup">SignUp</NavDropdown.Item>
                  <NavDropdown.Item href="/userLogin">Login</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNav;
