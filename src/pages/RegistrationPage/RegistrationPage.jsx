import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={css.regContainer}>
      <h2 className={css.regHeader}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
