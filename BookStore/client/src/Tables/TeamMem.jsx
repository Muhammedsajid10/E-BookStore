import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import {IoTrashBin,IoEye,IoPencil} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const TeamMem = () => {
    const [TeamMember, setTeamMember] = useState([])


    useEffect(() => {
      fetchData()
    }, [])
    
   
    
    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/team')
        setTeamMember(response.data)
    }
    

    const deleteData = async (teamId) => {
      try {
        const response = await axios.delete(`http://localhost:5000/team/${teamId}`)
        setTeamMember((prevTeam) => prevTeam.filter((team) => team._id !== teamId))
      } catch (error) {
        console.log(`The delete is not working, Error : ${error}`);
      }
    }

    const navigete = useNavigate()

    const updateData = (teamId) => {
      navigete(`/teamMemUpdate/${teamId}`)
    }

    const teamIdPass = (teamId) => {
      navigete(`/teamMemIdPass/${teamId}`)
    }
    

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Dob</th>
                        <th>Gender</th>
                        <th>Description</th>
                        <th>Role</th>
                        <th>Mobile</th>
                        <th>Profile</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {TeamMember.map((Team, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{Team.Name}</td>
                            <td>{Team.Email}</td>
                            <td>{Team.Dob}</td>
                            <td>{Team.Gender}</td>
                            <td>{Team.Description}</td>
                            <td>{Team.Role}</td>
                            <td>{Team.Mobile}</td>
                            <td>{Team.ProfilePicture}</td>
                            <td><IoEye onClick={()=>teamIdPass(Team._id)} className='view-icon' /></td>
                            <td><IoPencil onClick={()=>updateData(Team._id)} className='update-icon' /></td>
                            <td><IoTrashBin onClick={()=>deleteData(Team._id)} className='delete-icon' /></td>
                        </tr>
                    ))

                    }
                </tbody>
            </Table>
        </div>
    )
}

export default TeamMem










