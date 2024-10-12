import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

import css from './Header.module.css';

export default function Header() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <header className={css.header}>
      <h2>Auth</h2>
      <h3>{user.name}</h3>
      <ul className={css.nav}>
        <li>
          <NavLink to="/">SmartPhonebook</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={() => dispatch(logOut())}>Logout</button>
          </li>
        )}
      </ul>
    </header>
  );
};


