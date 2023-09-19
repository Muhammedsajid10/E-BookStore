import React from 'react'
import TeamMem from '../Tables/TeamMem'
import Sidebar from '../SidebarNav'

const TeamMemHome = () => {
    return (
        <div className='books-homePage'>
          <div className="books-homepage-sidebar">
            <Sidebar/>
          </div>
          <div className="books-homepage-content">
            <TeamMem/>
          </div>
        </div>
      )
}

export default TeamMemHome
