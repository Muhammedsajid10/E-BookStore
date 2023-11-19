// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios'
// // import './LoginForm.css'; 
// import './SighupForm.css'
// import AdminNav from '../AdminNav';
// import { useNavigate } from 'react-router-dom';


// const SighupForm = () => {
//   const [Name, setName] = useState("")
//   const [Email, setEmail] = useState("")
//   const [Password, setPassword] = useState("")
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/user', { Name, Email, Password })
//       console.log(response.data);
//       navigate('/userHome');
//     } catch (error) {
//       console.log('Error on posting data : ', error);
//     }
//   }

//   return (
//     <div className='container-signup'>
//       <div className='formm-container fade-in-animation'>
//         <Form onSubmit={handleSubmit} style={{ width: '400px', marginLeft: '36%', border: '1px solid', padding: '35px' }}>
//           <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Signup</h1>
//           <Form.Group className="mb-3" controlId="formBasicName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     </div>
//   )
// }

// export default SighupForm




























import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './SighupForm.css';
import AdminNav from '../AdminNav';
import { useNavigate } from 'react-router-dom';

const SighupForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user', { Name, Email, Password });
      console.log(response.data);
      navigate('/userHome');
    } catch (error) {
      console.log('Error on posting data: ', error);
    }
  };

  return (
    <div className="container-signup">
      <div className="form-container fade-in-animation">
        <Form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Signup</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SighupForm;
