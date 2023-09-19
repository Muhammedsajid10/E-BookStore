import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './SidebarNav.css'
import { FcBusinessman, FcNews, FcPlus, FcSurvey } from "react-icons/fc";

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link className='text' as={NavLink} to="/Books" exact activeClassName="active" >
          <FcNews/>Books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text' as={NavLink} to="/AddBook" activeClassName="active" >
          <FcPlus/>Add Book
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text' as={NavLink} to="/team" activeClassName="active" >
            <FcBusinessman/>Team Members
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text' as={NavLink} to="/addTeam" activeClassName="active" >
          <FcPlus/>Add TeamMembers
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text' as={NavLink} to="/order" activeClassName="active" >
            <FcSurvey/>Orders
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text' as={NavLink} to="/addOrder" activeClassName="active" >
          <FcPlus/>Add Orders
          </Nav.Link>
        </Nav.Item>
      </Nav>
      

      
    </div>
  );
}

export default Sidebar;
