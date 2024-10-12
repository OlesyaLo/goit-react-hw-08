import { Link } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation () {
  return (
    <>
      <ul className={css.navigation}>
        <li className={css.navItem}>
          <Link to="/">SmartPhonebook</Link>
        </li>
        <li className={css.navItem}>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </>
  );
};

 
