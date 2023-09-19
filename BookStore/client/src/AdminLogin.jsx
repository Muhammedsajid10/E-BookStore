import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AdminLogin.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from './AdminNav';
import Modal from 'react-bootstrap/Modal'

const AdminLogin = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [secondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, serErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  //   const handleFirstName = (e) => {
  //     setFirstName(e.target.value);
  //   };

  //   const handleSecondName = (e) => {
  //     setSecondName(e.target.value);
  //   };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleShowErrorModal = () => {
    setShowErrorModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Email, Password);
    try {
      const response = await axios.post('http://localhost:5000/compAdmin', { Email, Password })
      console.log(response.data);
      localStorage.setItem('adninnDetails', response.data)
      navigate('/home');
    } catch (error) {
      console.log("hhhhhhaaaa::", error.response.data);
      serErrorMessage("Invalid Email or Password");
      handleShowErrorModal(); // Show the error modal

    }

  };

  return (
    <div>
     
      <div className="form-container fade-in-animation">
        {/* <h3 className='errMsg'>{errorMessage}</h3> */}
        <Form onSubmit={handleSubmit}   style={{width:'400px',border:'1px solid',padding:'30px'}}>
         <h2>AdminLogin</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"                                           
              placeholder="Enter email"
              value={Email}
              onChange={handleEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={Password}
              onChange={handlePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{color:'red'}}>{errorMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
};

export default AdminLogin;
