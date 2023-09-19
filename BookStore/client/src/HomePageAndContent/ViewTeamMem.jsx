import React from 'react'
import GetIdTeamMem from '../GetIdTeamMem'
import Sidebar from '../SidebarNav'

const ViewTeamMem = () => {
    return (
        <div>
            <div className='books-homePage'>
                <div className="books-homepage-sidebar">
                    <Sidebar />
                </div>
                <div className="books-homepage-content">
                    <GetIdTeamMem/>
                </div>
            </div>
        </div>
    )
}

export default ViewTeamMem
