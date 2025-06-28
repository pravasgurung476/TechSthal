// ProductDetails.js
import React, { useState } from 'react';
import './ProductDetails.css';
import mainImg from '../../assets/ProductsImages/gamepad/gamepad1.jpg';
import img2 from '../../assets/ProductsImages/gamepad/gamepad2.jpg';
import img3 from '../../assets/ProductsImages/gamepad/gamepad2.jpg';
import img4 from '../../assets/ProductsImages/gamepad/gamepad2.jpg';

export default function ProductDetails() {
  const images = [mainImg, img2, img3, img4];
  const [selectedImage, setSelectedImage] = useState(mainImg);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(2);

  const handleQuantity = (type) => {
    setQuantity(prev => (type === 'inc' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  return (
    <div className="product-details-container">
      <div className="images-column">
        <div className="thumbnails">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="thumb" onClick={() => setSelectedImage(img)} className="thumbnail" />
          ))}
        </div>
        <img src={selectedImage} alt="Selected Product" className="main-image" />
      </div>

      <div className="details-column">
        <h2>Havic HV G-92 Gamepad</h2>
        <div className="rating">⭐⭐⭐⭐☆ <span>(150 Reviews)</span> <span className="in-stock">In Stock</span></div>
        <h3>$192.00</h3>
        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

        <div className="selectors">
          <div className="color-selector">
            <label>Colours:</label>
            <span className={`color-dot ${selectedColor === 'black' ? 'active' : ''}`} onClick={() => setSelectedColor('black')}></span>
            <span className={`color-dot red ${selectedColor === 'red' ? 'active' : ''}`} onClick={() => setSelectedColor('red')}></span>
          </div>

          <div className="size-selector">
            <label>Size:</label>
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >{size}</button>
            ))}
          </div>
        </div>

        <div className="action-row">
          <div className="quantity-box">
            <button onClick={() => handleQuantity('dec')}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantity('inc')}>+</button>
          </div>
          <button className="buy-now">Buy Now</button>
          <button className="wishlist">♡</button>
        </div>

        <div className="extra-info">
          <div className="delivery-info">
            <b>🚚 Free Delivery</b><br />
            <span>Enter your postal code for Delivery Availability</span>
          </div>
          <div className="return-info">
            <b>🔁 Return Delivery</b><br />
            <span>Free 30 Days Delivery Returns. <u>Details</u></span>
          </div>
        </div>
      </div>
    </div>
  );
}
