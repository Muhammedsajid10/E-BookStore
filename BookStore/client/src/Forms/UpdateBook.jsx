import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const [Name, setName] = useState('');
  const [Author, setAuthor] = useState('');
  const [PublicationName, setPublicationName] = useState('');
  const [Year, setYear] = useState();
  const [Prize, setPrize] = useState();
  const [Availability, setAvailability] = useState('');

  const { bookId } = useParams()
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/idPassBook/${bookId}`);
      const { data } = response;
      setName(data.Name);
      setAuthor(data.Author);
      setPublicationName(data.PublicationName);
      setYear(data.Year);
      setPrize(data.Prize)
      setAvailability(data.Availability);
    } catch (error) {
      console.log('Error fetching book:', error);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, [bookId]); // Add bookId as a dependency to re-execute fetchData when bookId changes

  

 


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

  const handlePrize = (e) => {
    setPrize(e.target.value);
  }

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = { Name, Author, PublicationName, Year, Prize, Availability };
    console.log("Updating book:", bookId, updatedBook);
    try {
      const response = await axios.put(`http://localhost:5000/books/${bookId}`, updatedBook);
      console.log("Update response:", response.data); // Add this line to check the response data
      navigate('/Books');
    } catch (error) {
      console.log('Error updating book:', error);
    }
  };


  return (
    <div>
      <h1>Edit form</h1>
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
          <Form.Control type="number" value={Prize} onChange={handlePrize} placeholder="Prize" />
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

export default UpdateBook
