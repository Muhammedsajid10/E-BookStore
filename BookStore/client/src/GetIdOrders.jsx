import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GetIdOrders = () => {
    const [data, setdata] = useState('')

    const {orderId} = useParams()
    const fetchDataById = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/order/${orderId}`)
            setdata(response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error on fetchDataById');
            
        }
    } 

    useEffect(() => {
      fetchDataById()
    }, [])
    
   

  return (
    <div className="container" style={{color:'black',backgroundColor:'#d6cece',padding:'12px'}}>
            <h2 className="heading"><u>Orders Detail</u></h2>
            <p className="book-detail"><b>Name:</b> {data.ProductId}</p>
            <p className="book-detail"><b>Author:</b> {data.Fname}</p>
            <p className="book-detail"><b>Publication Name:</b> {data.Sname}</p>
            <p className="book-detail"><b>Year:</b> {data.ProductNo}</p>
            <p className="book-detail"><b>Availability:</b> {data.OrderDate}</p>
            <a href="/order" className='btn btn-primary'>Close</a>
            
        </div>
  )
}

export default GetIdOrders
