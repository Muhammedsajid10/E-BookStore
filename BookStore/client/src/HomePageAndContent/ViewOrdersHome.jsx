import React from 'react'
import Sidebar from '../SidebarNav'
import GetIdOrders from '../GetIdOrders'

const ViewOrdersHome = () => {
    return (
        <div className='books-homePage'>
            <div className="books-homepage-sidebar">
                <Sidebar />
            </div>
            <div className="books-homepage-content">
                <GetIdOrders />
            </div>
        </div>
    )
}

export default ViewOrdersHome
