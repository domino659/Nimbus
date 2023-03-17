import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../features/userSlice';

export default function Register() {
  const dispatch = useDispatch();

  const [infosRegister, setInfosRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = ({ target }) => {
    setInfosRegister((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(infosRegister));
  };

  return (
    <div className="auth-pages">
      <form onSubmit={handleSubmit}>
        <h1 className="title-form">Register</h1>
        <p>
          You already have an account ? <Link to="/login">Login</Link>
        </p>
        <div>
          <label>First Name</label>
          <input
            onChange={handleChange}
            value={infosRegister.firstName}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            onChange={handleChange}
            value={infosRegister.lastName}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label>Mail</label>
          <input
            onChange={handleChange}
            value={infosRegister.email}
            type="mail"
            name="email"
            placeholder="name@domain.com"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={handleChange}
            value={infosRegister.password}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label>Password Confirmation</label>
          <input
            onChange={handleChange}
            value={infosRegister.passwordConfirm}
            type="password"
            name="passwordConfirm"
            placeholder="Password Confirmation"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
