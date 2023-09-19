import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import {IoTrashBin,IoEye,IoPencil} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([])
    

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/order');
            console.log(response.data); // Log the response data to the console
            setOrders(response.data);
        } catch (error) {
            // Handle errors here, e.g., show an error message or perform error logging.
            console.error('Error fetching orders:', error);
        }
    };


    useEffect(() => {
        fetchData()
    }, [])


    const DeleteOrder = async (orderId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/order/${orderId}`)
            setOrders((prevOrder) => prevOrder.filter((value)=> value._id !== orderId))
            alert('are you sure want to delete this order..')
        } catch (error) {
            console.log('Error on deleting order : ',error);
        }
        
    }

    const navigate = useNavigate()
    const updateOrder = (orderId) => {
        navigate(`/updtOrder/${orderId}`)
    }

    const ViewOrders = (orderId) => {
        navigate(`/viewOrder/${orderId}`)
    }





    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ProudctId</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ProductNo</th>
                        <th>Date</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => ( // Use 'order' as the parameter for each mapped item
                        <tr key={order._id}> {/* Use a unique key for each row, '_id' is a good choice */}
                            <td>{index + 1}</td>
                            <td>{order.ProductId}</td>
                            <td>{order.Fname}</td>
                            <td>{order.Sname}</td>
                            <td>{order.ProductNo}</td>
                            <td>{new Date(order.OrderDate).toDateString()}</td> {/* Convert to a Date object */}
                            <td><IoEye onClick={()=>ViewOrders(order._id)} className='view-icon'/></td>
                            <td><IoPencil onClick={()=>updateOrder(order._id)} className='update-icon'/></td>
                            <td><IoTrashBin onClick={()=>DeleteOrder(order._id)} className='delete-icon'/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Orders





