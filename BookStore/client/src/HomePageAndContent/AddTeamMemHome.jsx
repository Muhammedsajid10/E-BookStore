import React from 'react'
import AddTeamMem from '../Forms/AddTeamMem'
import Sidebar from '../SidebarNav'

const AddTeamMemHome = () => {
    return (
        <div>
            <div className='books-homePage'>
                <div className="books-homepage-sidebar">
                    <Sidebar />
                </div>
                <div className="books-homepage-content">
                    <AddTeamMem />
                </div>
            </div>
        </div>
    )
}

export default AddTeamMemHome
