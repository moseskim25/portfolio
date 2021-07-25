import React, { useState } from 'react';
import './Navbar.scss';

const HOME = 'HOME';
const ABOUT = 'ABOUT';
const PROJECTS = 'PROJECTS';
const CONTACT = 'CONTACT';

export default function Navbar() {

  const [page, setPage] = useState(HOME);
  
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <p className={page === HOME ? `selected` : null} onClick={() => {setPage(HOME)}}>HOME</p> 
        <p className={page === ABOUT ? `selected` : null} onClick={() => {setPage(ABOUT)}}>ABOUT</p> 
        <p className={page === PROJECTS ? `selected` : null} onClick={() => {setPage(PROJECTS)}}>PROJECTS</p> 
        <p className={page === CONTACT ? `selected` : null} onClick={() => {setPage(CONTACT)}}>CONTACT</p> 
      </div>
    </div>
  )
}