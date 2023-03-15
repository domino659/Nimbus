import { Link } from 'react-router-dom';
import './style.scss';

export default function Navbar() {
  return (
    <navbar>
      <img src="./nimbus-logo.png" />
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/" className="link-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/templates" className="link-white">
              Templates
            </Link>
          </li>
          <li>
            <Link to="/help" className="link-white">
              Help
            </Link>
          </li>
        </ul>
        <span>
          <Link to="/account" className="link-white">
            Account
          </Link>
        </span>
      </div>
    </navbar>
  );
}
