import React, { useState } from 'react';
import './Register.css';
import logo from '../../assets/logo.png';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);

      setSuccess('Registration successful!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={logo} alt="Techsthal Logo" className="register-logo" />
        <h2>Create an account</h2>
        <p>Enter your details below</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={handleChange} />
          <input type="email" placeholder="Email or Phone Number" name="email" onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} />
          <button type="submit" className="create-btn">Create Account</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <button className="google-btn">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
          Sign up with Google
        </button>

        <p className="login-link">
          Already have account? <a href="#">Log in</a>
        </p>
      </div>

      <div className="register-right">
        <img src={logo} alt="IoT graphic" />
      </div>
    </div>
  );
}

export default Register;
