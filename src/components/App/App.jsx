import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';

import PhonebookPage from 'pages/PhonebookPage/PhonebookPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import HomePage from 'pages/HomePage/HomePage';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import PrivateRoute from 'components/routes/PrivateRoute';
import PublickRoute from 'components/routes/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return authSelectors.isRefreshing ?   <Loader /> : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route exact="true" index element={<HomePage />} />

         <Route
           path="/register"
          element={
            <PublickRoute redirectTo="/phonebook" component={<RegisterPage />} />
          }
        />
         <Route
          path="/login"
          element={
            <PublickRoute redirectTo="/phonebook" component={<LoginPage />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />

      </Route>
      <Route exact="true" path="*" element={<NotFoundPage />} />
    </Routes>
  );
};