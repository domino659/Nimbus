import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../features/userSlice';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div className="auth-pages">
      <form>
        <h1 className="title-form">Login</h1>
        <p>
          You dont have any account ? <Link to="/register">Register</Link>
        </p>
        <div>
          <label>Mail</label>
          <input type="mail" placeholder="name@domain.com" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <button onClick={() => dispatch(login())}>Send</button>
      </form>
    </div>
  );
}
