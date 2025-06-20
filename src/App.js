import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import HomeCarousel from './components/HomeCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Category/Categories';


function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <Navbar />
      </div>
      
      <div>
        {/* a<HomeCarousel /> */}
      </div>
      <div >
        <Categories />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
