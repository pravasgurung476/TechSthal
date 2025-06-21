import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Category/Categories';
import Register from './components/RegisterLogin/Register';
import Advertisement from './components/Advertisement/Advertisement';


function App() {
  return (
    <div className="app-container">
      <div className="main-content">        
        <Navbar />      
        <Categories />  
        <Advertisement />

      </div>
        <Footer />
    </div>
  );
}

export default App;
