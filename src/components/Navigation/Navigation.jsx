import { Link } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation () {
  return (
    <>
      <ul className={css.navigation}>
        <li>
          <Link to="/">Smart Phonebook</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </>
  );
};

 
