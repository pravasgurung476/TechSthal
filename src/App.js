import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Category/Categories';
import Register from './components/RegisterLogin/Register';
import Advertisement from './components/Advertisement/Advertisement';
import Product from './components/Products/Product';
import products from './components/Products/ProductData'; // 👈 import product list
import Bill from './components/Billing/Bill';
import ProductDetails from './components/Products/ProductDetails';
function App() {
  return (
    <div className="app-container">
      <div className="main-content">        
        <Navbar />      
        {/* <Categories />  
        <Advertisement /> */}
{/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', padding: '2rem' }}>
  {products.map((product, index) => (
    <Product
      key={index}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ))}
</div>

  <Bill />
  <ProductDetails /> */}
      <Register />

      </div>
        <Footer />
    </div>
  );
}

export default App;
