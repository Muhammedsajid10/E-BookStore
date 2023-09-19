import axios from 'axios'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const AddTeamMem = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Dob, setDob] = useState("")
    const [Gender, setGender] = useState("")
    const [Description, setDescription] = useState("")
    const [Role, setRole] = useState("")
    const [Mobile, setMobile] = useState("")
    const [ProfilePicture, setProfilePicture] = useState("")

    const navigate = useNavigate()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleDob = (e) => {
        setDob(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleRole = (e) => {
        setRole(e.target.value)
    }

    const handleMobile = (e) => {
        setMobile(e.target.value)
    }

    const handleProfile = (e) => {
        setProfilePicture(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/team', { Name, Email, Dob, Gender, Description, Role, Mobile, ProfilePicture })
            console.log("Response : ", response.data);
            navigate('/team')
        
        } catch (error) {
            console.log(`Error on Post data : ${error}`);
        }

    }




    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={handleName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={handleEmail} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Enter Dob" value={Dob} onChange={handleDob} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="gender">
                    <Form.Check type="radio" label='Male' value='male' checked={Gender === 'male'} onChange={handleGender} />
                    <Form.Check type='radio' label='Female' value='female' checked={Gender === 'female'} onChange={handleGender} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Description" value={Description} onChange={handleDescription} />
                </Form.Group>

                <Form.Select aria-label="Default select example" value={Role} onChange={handleRole}>
                    <option>Role</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Enter Mobile" value={Mobile} onChange={handleMobile} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter ProfilePicture" value={ProfilePicture} onChange={handleProfile} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddTeamMem
