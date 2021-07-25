import React from 'react';
import './About.scss';

export default function About() {
  return (
    <main className='about-me-container'>
      <h1>ABOUT ME</h1>
      <div className='about-me'>
        <img src='https://res.cloudinary.com/dm4r202h4/image/upload/v1627091313/Profile_hnh8zx.jpg' alt='' />
        <div className='about-me-paragraph'>
          <p>Hi there! Glad you found it onto my page! </p>
          <p>I'm a full-stack web developer based out of Toronto. The reason I chose to pursue this is career is because whether I'm gardening, woodworking, or writing code, it brings me great satisfaction to build something from scratch and engage my creative talents.</p>
          <p>You probably hear this all the time but I love problem solving. Of course, I do believe I'm good at it but more importantly, I LOVE doing it. I feel most engaged when I am stuck on a problem. Hours fly by and I am stuck to my chair. This is what first sparked my interest into coding and it still drives me to learn more every day.</p>
        </div>
      </div>
    </main>
  )
}