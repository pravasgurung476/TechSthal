import React from 'react';
import './Advertisement.css';
import advertisement from '../../assets/advertisement.jpg';

function Advertisement() {
  return (
    <div className="advertisement-container">
      <div className="ad-image-wrapper">
        <img src={advertisement} className="ad-image" />
        <div className="ad-text">
            Categories
        </div>
        <button className="buy-now-btn">Buy Now</button>
      </div>

    </div>
  );
}

export default Advertisement;
