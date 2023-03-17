import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { disconnect } from '../../../features/userSlice';
import { useSelector } from 'react-redux'; 

export default function AccountMenu({ setShowAccountMenu }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowAccountMenu(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className="account-menu">
      <ul>
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
        <li className="link-white" onClick={() => dispatch(disconnect())}>
          Disconnect
        </li>
      </ul>
      <div className="bottom">
        <p>Copyright © 2023 All right reserved</p>
      </div>
    </div>
  );
}
