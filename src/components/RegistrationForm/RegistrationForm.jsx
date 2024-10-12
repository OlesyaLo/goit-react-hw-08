import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { registerUser } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import * as Yup from 'yup';

import css from './RegistrationForm.module.css';

const RegistrationForm = () => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  
  const isLogedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUser(userData));
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
          <Field
            className={css.input}
            name="name"
            placeholder="Enter your name"
          />
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
          <button type="submit" className={css.btnRegisterIn}>Register</button>
          <p className={css.text}>
            Do you already have an account?
            <span className={css.redirect}>
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
