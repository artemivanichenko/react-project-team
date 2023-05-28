import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContainerPublic,
  ContainerPrivate,
  ContentImage,
  BgOverlay,
} from './Layout.styled';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      {isAuth ? (
        <ContainerPrivate>
          <BgOverlay>
            <Header />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </BgOverlay>
        </ContainerPrivate>
      ) : (
        <ContainerPublic>
          <BgOverlay>
            <ContentImage>
              <Header />
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ContentImage>
          </BgOverlay>
        </ContainerPublic>
      )}
    </>
  );
};

export default Layout;
