import React from 'react'
import SideBarRightImage from '../SideBaRightImage'
import Sidebar from '../SidebarNav'

const SidebarAndImage = () => {
  return (
    <div className='books-homePage'>
      <div className="books-homepage-sidebar">
        <Sidebar/>
      </div>
      <div className="books-homepage-content">
        <SideBarRightImage/>
      </div>
    </div>
  )
}

export default SidebarAndImage
