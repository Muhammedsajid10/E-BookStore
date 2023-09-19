import React from 'react'
import Sidebar from '../SidebarNav'
import AddOrders from '../Forms/AddOrders'

const AddOrdersHome = () => {
    return (

        <div className='books-homePage'>
            <div className="books-homepage-sidebar">
                <Sidebar />
            </div>
            <div className="books-homepage-content">
                <AddOrders />
            </div>
        </div>

    )
}

export default AddOrdersHome
