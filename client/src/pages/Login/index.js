import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../features/userSlice';

export default function Login() {
  const dispatch = useDispatch();

  const [infosConnection, setInfosConnexion] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    setInfosConnexion((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(infosConnection));
  };

  return (
    <div className="auth-pages">
      <form onSubmit={handleSubmit}>
        <h1 className="title-form">Login</h1>
        <p>
          You dont have any account ? <Link to="/register">Register</Link>
        </p>
        <div>
          <label>Mail</label>
          <input
            type="mail"
            name="email"
            onChange={handleChange}
            value={infosConnection.email}
            placeholder="name@domain.com"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={infosConnection.password}
            placeholder="password"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
