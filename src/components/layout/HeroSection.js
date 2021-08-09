import React from 'react';
import './HeroSection.css';
import { Link} from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container' style={{ background: `url('images/gallery-7.jpg') center center/cover no-repeat` }}>
      <h1>VINTAGE IMAGE GALLERY WEB APP</h1>
      <div className='hero-btns'>
        <button
          className='btn btn-lg btn-primary text-white font-weight-bold text-decoration-none'
        >
          <Link className="text-white font-weight-bold text-decoration-none"
        to="/gallery/add"
      >
          ADD IMAGE
          </Link>
        </button>
        <button
          className=' btn btn-lg btn-success text-white text-decoration-none'
        >
          <Link className="text-white text-decoration-none"
        to="/"
      >
          VIEW GALLERY
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
