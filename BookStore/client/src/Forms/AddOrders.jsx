import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddOrders = () => {
    const [ProductId, setProductId] = useState("")
    const [Fname, setFname] = useState("")
    const [Sname, setSname] = useState("")
    const [ProductNo, setProductNo] = useState("")
    const OrderDate = new Date().toDateString() 

    const navigate = useNavigate()

    const handleProductId = async (e) => {
        setProductId(e.target.value)
    }

    const handleFname = async (e) => {
        setFname(e.target.value)
    }

    const handleSname = async (e) => {
        setSname(e.target.value)
    }

    const handleProductNo = async (e) => {
        setProductNo(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postOrders = {ProductId,Fname,Sname,ProductNo,OrderDate}
        try {
            const response = await axios.post('http://localhost:5000/order',postOrders)
            console.log('Response : ',response.data);
            navigate('/order')
        } catch (error) {
            console.log('Order Post Error is : ',error);
        }
        
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" value={ProductId} onChange={handleProductId} placeholder="ProudctID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={Fname} onChange={handleFname} placeholder="Fname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={Sname} onChange={handleSname} placeholder="Sname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" value={ProductNo} onChange={handleProductNo} placeholder="ProudctNo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={OrderDate}  placeholder="Date" />
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Submit
                </Button>


              
            </Form>
    </div>
  )
}

export default AddOrders
