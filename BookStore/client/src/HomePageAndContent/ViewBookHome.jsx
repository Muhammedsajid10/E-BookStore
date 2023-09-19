import React from 'react'
import './BookHomePage.css'
import GetIdBook from '../GetIdBook'
import Sidebar from '../SidebarNav'

const ViewBookHome = () => {
    return (
        <div>
            <div className='books-homePage'>
                <div className="books-homepage-sidebar">
                    <Sidebar />
                </div>
                <div className="books-homepage-content">
                    <GetIdBook/>
                </div>
            </div>
        </div>
    )
}

export default ViewBookHome
