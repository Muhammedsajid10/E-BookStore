import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; 
import AdminNav from '../AdminNav';
import Swal from 'sweetalert2';


const LoginForm = () => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission

        try {
            const response = await axios.post('http://localhost:5000/user/login', { Email, Password });
            console.log('tokkennnn:',response.data.token);
            // Assuming the server returns a JWT token upon successful login
            const token = response.data.token;
            // Store the token in localStorage or session storage for future API requests
            localStorage.setItem('userInfooooo', JSON.stringify(token));
            if(token){
                Swal.fire({
                    title:"Login Successfull",
                    icon: "success"
                   
                })
                navigate('/userHome');
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    
                  })
            }

           
        } catch (error) {
            console.log('Login failed:', error);
            setErrorMessage('Invalid Email or Password')
           
        }
    };

    return (
        
        <div className='container-login'>
    
            <Form onSubmit={handleSubmit} className='formm' style={{width:'400px',marginLeft:'36%',border:'1px solid',padding:'35px'}}>
                <h5 style={{color:'red'}}>{errorMessage}</h5>
                <h1 style={{textAlign:'center',marginBottom:'2rem'}}>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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
    )
}

export default LoginForm
