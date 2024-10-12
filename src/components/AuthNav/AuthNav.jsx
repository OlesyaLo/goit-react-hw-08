import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <nav className={css.navigationItem}>
         <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
