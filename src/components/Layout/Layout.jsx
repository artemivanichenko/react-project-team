import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  ContainerPublic,
  ContainerPrived,
  ContentImage,
  BgOverlay,
} from './Layout.styled';
import { useSelector } from 'react-redux';

const Layout = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  console.log(isAuth);
  return (
    <>
      {isAuth ? (
        <ContainerPrived>
          <BgOverlay>
            <Header />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
          </BgOverlay>
        </ContainerPrived>
      ) : (
        <ContainerPublic>
          <BgOverlay>
            <ContentImage>
              <Header />
              <Suspense fallback={<h1>Loading...</h1>}>
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
