import React from 'react';
import '../App.css'; // or wherever you're keeping the CSS

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3 className="footer-title">Techsthal</h3>
        <p className="footer-subscribe">Subscribe</p>
        <p>Get 10% off your first order</p>
        <form className="footer-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">➤</button>
        </form>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Support</h4>
        <p>111 Bijoy sarani, Dhaka,</p>
        <p>DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Account</h4>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Quick Link</h4>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Download App</h4>
        <p>Save $3 with App New User Only</p>
        <div className="footer-apps">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
        </div>
        <div className="footer-socials">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
