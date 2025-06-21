import React from 'react';
import './Advertisement.css';
import advertisement from '../../assets/advertisement.jpg';
import '../Category/CategoryBox.css'; // Assuming you want to use the same styles for the ad text

function Advertisement() {
  return (
    <div className="advertisement-container">
      <div className="ad-image-wrapper">
        <img src={advertisement} className="ad-image" alt="Advertisement Image"/>
        <div className="ad-text BaseFont">
            Categories
        </div>
        <button className="buy-now-btn">Buy Now</button>
      </div>

    </div>
  );
}

export default Advertisement;
