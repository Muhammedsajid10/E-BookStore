import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTeamMem = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Dob, setDob] = useState("")
    const [Gender, setGender] = useState("")
    const [Description, setDescription] = useState("")
    const [Role, setRole] = useState("")
    const [Mobile, setMobile] = useState("")
    const [ProfilePicture, setProfilePicture] = useState("")

    const navigate = useNavigate()
    const {teamId} = useParams()

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/idPassTeam/${teamId}`)
        const {data} = response;
        setName(data.Name)
        setEmail(data.Email)
        setDob(data.Dob)
        setGender(data.Gender)
        setDescription(data.Description)
        setRole(data.Role)
        setMobile(data.Mobile)
        setProfilePicture(data.ProfilePicture)
    }

    useEffect(() => {
     fetchData()
    }, [teamId])
    



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
        e.preventDefault()
        const updateTeamMember = { Name, Email, Dob, Gender, Description, Role, Mobile, ProfilePicture }
        try {
            const response = await axios.put(`http://localhost:5000/team/${teamId}`,updateTeamMember)
            console.log('Response : ',response.data);
            navigate('/team')
        } catch (error) {
            console.log(`The update error is ${error}`);
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

export default UpdateTeamMem
