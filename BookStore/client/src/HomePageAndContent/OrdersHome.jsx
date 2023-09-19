import React from 'react'
import Sidebar from '../SidebarNav'
import Orders from '../Tables/Orders'

const OrdersHome = () => {
  return (
    <div className='books-homePage'>
      <div className="books-homepage-sidebar">
        <Sidebar/>
      </div>
      <div className="books-homepage-content">
        <Orders/>
      </div>
    </div>
  )
}

export default OrdersHome
