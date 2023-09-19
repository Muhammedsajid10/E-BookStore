import React from 'react'
import AddBooks from '../Forms/AddBooks'
import Sidebar from '../SidebarNav'
import './BookHomePage.css'

const AddBookHome = () => {
    return (
        <div>
            <div className='books-homePage'>
                <div className="books-homepage-sidebar">
                    <Sidebar />
                </div>
                <div className="books-homepage-content">
                    <AddBooks/>
                </div>
            </div>
        </div>
    )
}

export default AddBookHome
