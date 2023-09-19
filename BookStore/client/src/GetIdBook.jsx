import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './GetIdBook.css'

const GetIdBook = () => {
    const [selecteBook, setSelecteBook] = useState("")
    const { bookId } = useParams()

    useEffect(() => {
        getPassBook()
    }, [])

    const getPassBook = async () => {
        const response = await axios.get(`http://localhost:5000/idPassBook/${bookId}`)
        console.log('KKKKKKK0000::', response.data);
        setSelecteBook(response.data)
    }


    return (
        <div className="container-book">
            <h2 className="heading"><u>Book Detail</u></h2>
            <p className="book-detail"><b>Name:</b> {selecteBook.Name}</p>
            <p className="book-detail"><b>Author:</b> {selecteBook.Author}</p>
            <p className="book-detail"><b>Publication Name:</b> {selecteBook.PublicationName}</p>
            <p className="book-detail"><b>Year:</b> {selecteBook.Year}</p>
            <p className="book-detail"><b>Prize:</b> {selecteBook.Prize}</p>
            <p className="book-detail"><b>Availability:</b> {selecteBook.Availability}</p>
            <a href="/Books" className='btn btn-primary'>Close</a>
        </div>
    )
}

export default GetIdBook


