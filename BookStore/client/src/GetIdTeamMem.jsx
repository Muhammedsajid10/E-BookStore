import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GetIdTeamMem = () => {
    
    const [viewBook, setviewBook] = useState("")
    const {teamId} = useParams()

    useEffect(() => {
        getId()
       }, [])

    const getId = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/idPassTeam/${teamId}`)
        console.log(response.data);
        setviewBook(response.data)
      } catch (error) {
         console.log('Error fetching team member data:', error);
      }
       
    }

   
    
  return (
    <div className="container" style={{color:'black',backgroundColor:'#d6cece',padding:'12px'}}>
            <h2 className="heading"><u>Members Detail</u></h2>
            <p className="book-detail"><b>Name:</b> {viewBook.Name}</p>
            <p className="book-detail"><b>Email:</b> {viewBook.Email}</p>
            <p className="book-detail"><b>Dob:</b> {viewBook.Dob}</p>
            <p className="book-detail"><b>Gender:</b> {viewBook.Gender}</p>
            <p className="book-detail"><b>Description:</b> {viewBook.Description}</p>
            <p className="book-detail"><b>Role:</b> {viewBook.Role}</p>
            <p className="book-detail"><b>Mobile:</b> {viewBook.Mobile}</p>
            <p className="book-detail"><b>Profile:</b> {viewBook.ProfilePicture}</p>
            <a href="/team" className='btn btn-primary'>Close</a>
            
        </div>
  )
}

export default GetIdTeamMem
