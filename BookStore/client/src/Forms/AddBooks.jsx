import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const [Name, setName] = useState('');
    const [Author, setAuthor] = useState('');
    const [PublicationName, setPublicationName] = useState('');
    const [Year, setYear] = useState();
    const [Prize, setPrize] = useState()
    const [Availability, setAvailability] = useState('');

    const navigate = useNavigate()
    


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handlePublicationNameChange = (e) => {
        setPublicationName(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handleAvailabilityChange = (e) => {
        setAvailability(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform further actions with the form data
        console.log('Form submitted:', { Name, Author, PublicationName, Year,Prize, Availability });
        const backEnd = await axios.post('http://localhost:5000/book', { Name, Author, PublicationName, Year, Prize, Availability })
        console.log(backEnd.data);
        localStorage.setItem('bookStoreee', JSON.stringify(backEnd.data))

        navigate('/Books')  // Navigate to "/Books" route after form submission
    };

    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" value={Name} onChange={handleNameChange} placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={Author} onChange={handleAuthorChange} placeholder="Author" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={PublicationName} onChange={handlePublicationNameChange} placeholder="PublicationName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" value={Year} onChange={handleYearChange} placeholder="Year" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" value={Prize} onChange={(e)=>setPrize(e.target.value)} placeholder="Prize" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={Availability} onChange={handleAvailabilityChange} placeholder="Availability" />
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Submit
                </Button>


              
            </Form>

        </div>

    )
}

export default AddBooks
