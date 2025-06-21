import React from 'react';
import './Product.css';

function Product({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="product-price">${price}</p>
    </div>
  );
}

export default Product;
