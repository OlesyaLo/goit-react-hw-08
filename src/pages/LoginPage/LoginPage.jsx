import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import css from './LoginPage.module.css';

export default function LoginPage () {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to="/" />;
  }

  return (
    <div className={css.logInPagecontainer}>
      <h2 className={css.logInPageHeader}>Log In Here</h2>
      <LoginForm />
    </div>
  );
};

