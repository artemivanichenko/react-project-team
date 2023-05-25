import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { loader } from './Loader/Loader';
import { useLoading } from 'hooks';

const Home = lazy(() => import('pages/Home/Home'));
const LoginRegistration = lazy(() => import('pages/LoginRegistration/LoginRegistration'));
const Report = lazy(() => import('pages/Report/Report'));

export const App = () => {
  const { isLoading } = useLoading();
  

  return isLoading ? loader : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<LoginRegistration />} redirectTo='home' />} />
        <Route path="home" element={<PrivateRoute component={<Home />} redirectTo='/' />} >
          <Route path=":expenses" element={<Home />} />
          <Route path=":income" element={<Home />} />
        </Route>
        <Route path="reports" element={<PrivateRoute component={<Report />} redirectTo='/' />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
