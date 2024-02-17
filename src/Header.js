import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon icon_header' onClick={OpenSidebar} />
            </div>
            <div className='header-left'>
                
            </div>
            <div className='header-right'>
                <div className='icon-container'>
                    <BsFillBellFill className='icon' />
                    <span className='badge'>2</span>
                </div>
                <div className='icon-container'>
                    <BsFillEnvelopeFill className='icon' />
                    <span className='badge'>1</span>
                </div>
                <div className='profile-icon-container'>
                    <BsPersonCircle className='icon' />
                    <span className='profile-name'>Edicha Julius</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
