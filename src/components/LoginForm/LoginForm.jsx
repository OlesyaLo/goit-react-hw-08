import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import * as Yup from 'yup';

import css from './LoginForm.module.css';

export default function LoginForm () {
  const isLogedIn = useSelector(selectIsLoggedIn);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  if (isLogedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
        <h1 className={css.logInFormHeader}>Login</h1>
        <p className={css.logInFormText}>If you have an account, sign in with your email address.</p>
          <Field
            className={css.input}
            name="email"
            placeholder="Enter your email"
          />
          <Field
            className={css.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button 
          type="submit"
          className={css.btnLogIn}>
            Sign In
            </button>
          <p className={css.text}> 
           Don´t have an account? 
            <span className={css.redirect}>
              <Link to="/register">Create an Account</Link>
            </span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

