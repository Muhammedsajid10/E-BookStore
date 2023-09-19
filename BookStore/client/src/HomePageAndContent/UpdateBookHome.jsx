import React from 'react'
import UpdateBook from '../Forms/UpdateBook'
import Sidebar from '../SidebarNav'

const UpdateBookHome = () => {
  return (
    <div className='books-homePage'>
      <div className="books-homepage-sidebar">
        <Sidebar/>
      </div>
      <div className="books-homepage-content">
        <UpdateBook/>
      </div>
    </div>
  )
}

export default UpdateBookHome
