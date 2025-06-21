import './Register.css';
import loginImage from '../../assets/logo.png'; // adjust the path to your image
import logo from '../../assets/logo.png'; // adjust the path to your logo

function Register() {
  return (
    <div className="register-container">
      <div className="register-left">
        <img src={logo} alt="Techsthal Logo" className="register-logo" /> {/* Change if needed */}
        <h2>Create an account</h2>
        <p>Enter your details below</p>

        <form className="register-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="create-btn">Create Account</button>
        </form>

        <button className="google-btn">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
          Sign up with Google
        </button>

        <p className="login-link">
          Already have account? <a href="#">Log in</a>
        </p>
      </div>

      <div className="register-right">
        <img src={loginImage} alt="IoT graphic" />
      </div>
    </div>
  );
}

export default Register;
