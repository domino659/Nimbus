import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../features/userSlice';

export default function Register() {
  const dispatch = useDispatch();

  return (
    <div className="auth-pages">
      <form>
        <h1 className="title-form">Register</h1>
        <p>
          You already have an account ? <Link to="/login">Login</Link>
        </p>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <label>Mail</label>
          <input type="mail" placeholder="name@domain.com" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button onClick={() => dispatch(login())}>Send</button>
      </form>
    </div>
  );
}
