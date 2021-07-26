import React from 'react';
import './About.scss';

export default function About() {
  return (
    <main className='about-me-container'>
      <h1>ABOUT ME</h1>
      <div className='about-me'>
        <img src='https://res.cloudinary.com/dm4r202h4/image/upload/v1627091313/Profile_hnh8zx.jpg' alt='' />
        <div className='about-me-paragraph'>
          <p>I'm glad you found it onto my page!</p>
          <p>I'm Moses Kim, a full-stack web developer based out of Toronto.</p>

          <p>Why is web development important to me?</p>
          <p>I love to build things! Whether I'm in the garden planting vegetables or in the garage building a new workbench, I love to create something from start to finish. Web development is another avenue for me to express myself and create things with unlimited potential!</p>
        </div>
      </div>
    </main>
  )
}