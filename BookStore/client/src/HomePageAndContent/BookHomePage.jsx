import React from 'react'
import Sidebar from '../SidebarNav'
import Books from '../Tables/Books'
import './BookHomePage.css'

const BookHomePage = () => {
  return (

    <div className='books-homePage'>
      <div className="books-homepage-sidebar">
        <Sidebar />
      </div>
      <div className="books-homepage-content">
        <Books />
      </div>
    </div>


  )
}

export default BookHomePage
