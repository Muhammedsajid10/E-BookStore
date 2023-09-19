import React from 'react'
import UpdateTeamMem from '../Forms/UpdateTeamMem'
import Sidebar from '../SidebarNav'

const UpdateTeamHome = () => {
  return (
    <div className='books-homePage'>
      <div className="books-homepage-sidebar">
        <Sidebar/>
      </div>
      <div className="books-homepage-content">
        <UpdateTeamMem/>
      </div>
    </div>
  )
}

export default UpdateTeamHome
