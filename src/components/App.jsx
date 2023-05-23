import { Navigate, Route, Routes } from 'react-router-dom';
import LoginRegistration from 'pages/LoginRegistration/LoginRegistration';
import Layout from './Layout/Layout';
import Report from 'pages/Report/Report';
import Home from 'pages/Home/Home';
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from 'redux/auth/authOperations';
import PublicRoute from './PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUser())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<LoginRegistration />} redirectTo='home' />} />
        <Route path="home" element={<PrivateRoute component={<Home />} redirectTo='/' /> } />
        <Route path="reports" element={<PrivateRoute component={<Report />} redirectTo='/' /> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
