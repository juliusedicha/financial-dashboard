import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BsGrid1X2Fill, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';


import {  BsGraphUpArrow , BsBank2 } from 'react-icons/bs';
import { FaSackDollar } from "react-icons/fa6";

import { GrTransaction } from "react-icons/gr";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <div className="profile">
            <img src="profile-image.jpg" alt="EDICHA JULIUS" /> 
            <span className="profile-name">EDICHA JULIUS</span>
            <span className="profile-email">juliusedicha@gmail.com</span>
          </div>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span> {/* Ensure OpenSidebar is correctly implemented */}
      </div>

      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${activeItem === 'Dashboard' ? 'active' : ''}`} onClick={() => handleItemClick('Dashboard')}>
          <Link to="/dashboard">
            <BsGrid1X2Fill className='icon' /> DASHBOARD
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'Savings' ? 'active' : ''}`} onClick={() => handleItemClick('Savings')}>
          <Link to="/savings">
            <BsBank2 className='icon' /> SAVINGS
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'Investment' ? 'active' : ''}`} onClick={() => handleItemClick('Investment')}>
          <Link to="/investment">
            <FaSackDollar  className='icon' /> INVESTMENT
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'Financial' ? 'active' : ''}`} onClick={() => handleItemClick('Financial')}>
          <Link to="/financial">
            <BsGraphUpArrow  className='icon' /> FINANCIAL HEALTH
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'Expenses' ? 'active' : ''}`} onClick={() => handleItemClick('Expenses')}>
          <Link to="/expenses">
            <GrTransaction className='icon' /> EXPENSES
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'Statement' ? 'active' : ''}`} onClick={() => handleItemClick('Statement')}>
          <Link to="/statement">
            <BsMenuButtonWideFill className='icon' /> STATEMENT
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'Settings' ? 'active' : ''}`} onClick={() => handleItemClick('Settings')}>
          <Link to="/settings">
            <BsFillGearFill className='icon' /> SETTING
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
