import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountMenu from './AccountMenu';
import './style.scss';

export default function Navbar() {
  const [showAccountMenu, setShowAccountMenu] = useState();

  return (
    <>
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
          <span
            className="link-white"
            onClick={() => {
              setShowAccountMenu(!showAccountMenu);
            }}
          >
            Account
          </span>
        </div>
      </navbar>
      {showAccountMenu ? (
        <AccountMenu setShowAccountMenu={setShowAccountMenu} />
      ) : (
        ''
      )}
    </>
  );
}
