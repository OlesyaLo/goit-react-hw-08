import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations.js';
import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from '../PrivateRoute.jsx';
import RestrictedRoute from '../RestrictedRoute.jsx';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
// import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Loader from "../Loader/Loader.jsx";
import "./App.module.css";


const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));


export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
  <Loader />
) : (
  <Suspense>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
       <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>

    <Route
      path="/login"
      element={
        <RestrictedRoute>
          <LoginPage />
        </RestrictedRoute>
      }
    />
    <Route
      path="/register"
      element={
        <RestrictedRoute>
          <RegistrationPage />
        </RestrictedRoute>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</Suspense>
);
};