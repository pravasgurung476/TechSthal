import '../App.css';
import logo from '../assets/logo.png'; // adjust path based on your file location

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
            <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="dropdown">
          <button className="dropbtn">Products ▾</button>
          <div className="dropdown-content">
            <a href="#">Sensors</a>
            <a href="#">Controllers</a>
            <a href="#">Motors</a>
          </div>
        </div>

        <a href="#">Kits</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </div>

      <div className="nav-right">
        <input type="text" placeholder="Search..." className="searchbar" />
        <a href="#">Wishlist</a>
        <button className="signin-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
