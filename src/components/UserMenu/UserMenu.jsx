import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  console.log(token);
  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}!</p>
      <button className={css.logoutBtn} onClick={() => dispatch(logOut(token))}>Log out</button>
    </div>
  );
};

export default UserMenu;
