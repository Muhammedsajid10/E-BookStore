import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateOrders = () => {

    const [ProductId, setProductId] = useState("")
    const [Fname, setFname] = useState("")
    const [Sname, setSname] = useState("")
    const [ProductNo, setProductNo] = useState("")
    const [OrderDate, setOrderDate] = useState(new Date().toDateString())

    const { orderId } = useParams()

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/order/${orderId}`);
            const { data } = response;
            setProductId(data.ProductId);
            setFname(data.Fname);
            setSname(data.Sname);
            setProductNo(data.ProductNo)
            setOrderDate(data.OrderDate)
        } catch (error) {
            console.log('Error on fetching data at time of update : ',error);
        }
        

    }

    useEffect(() => {
      fetchData()
    }, [orderId])
    




    const navigate = useNavigate()





    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = { ProductId, Fname, Sname, ProductNo, OrderDate }
        try {
            const response = await axios.put(`http://localhost:5000/order/${orderId}`, order)
            navigate('/order')
        } catch (error) {
            console.log('Error on update data : ', error);

        }

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" value={ProductId} onChange={(e) => setProductId(e.target.value)} placeholder="ProductId" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={Fname} onChange={(e) => setFname(e.target.value)} placeholder="Fname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={Sname} onChange={(e) => setSname(e.target.value)} placeholder="Sname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" value={ProductNo} onChange={(e) => setProductNo(e.target.value)} placeholder="ProductNo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" value={OrderDate} placeholder="OrderDate" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>



            </Form>
        </div>
    )
}

export default UpdateOrders
