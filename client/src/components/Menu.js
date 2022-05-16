import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsSearch, BsPerson } from 'react-icons/bs'
import './Menu.css';
import { IconContext } from 'react-icons/lib';


function Menu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

  return (
    <>
        <IconContext.Provider value={{ color: 'black'}}>
            <div className='menu-wrapper'>
                <div className='menu-container'>
                    <div className='menu-icon-mobile' onClick={handleClick}>
                        <Link to='/' className='menu-logo-mobile' onClick={closeMenu}>
                            ABI Rosa Gomes
                        </Link>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                
                    <ul className={click ? 'menu-items active' : 'menu-items'}>
                        <div className='menu-items-main'>
                            <Link to='/' className='menu-logo' onClick={closeMenu}>ABI Rosa Gomes</Link>
                            <li className='menu-item'>
                                <Link to='/' className='menu-link' onClick={closeMenu}>Home</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/' className='menu-link' onClick={closeMenu}>Classes</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/' className='menu-link'>Register</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/' className='menu-link'>Gallery</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/' className='menu-link'>Contact</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='/' className='menu-link'>Donate</Link>
                            </li>
                        </div>
                            
                        <div className='menu-items-right menu-link'>
                            <div>
                                <BsSearch />
                            </div>
                            <div>
                                <BsPerson />
                            </div>
                            <div>
                                <p>English</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
    </>
  )
}

export default Menu