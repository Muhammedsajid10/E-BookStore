import React from 'react'
import Sidebar from '../SidebarNav'
import UpdateOrders from '../Forms/UpdateOrders'

const UpdateOrdersHome = () => {
  return (
    <div className='books-homePage'>
      <div className="books-homepage-sidebar">
        <Sidebar/>
      </div>
      <div className="books-homepage-content">
        <UpdateOrders/>
      </div>
    </div>
  )
}

export default UpdateOrdersHome
