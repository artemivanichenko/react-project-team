import styled from '@emotion/styled';
import bgBM from '../../images/bgOverlayWeb.png';
import wallet from '../../images/wallet.png';
import cashTablet from '../../images/cashTablet.png';
import bgOverlayTablet from '../../images/bgOverlaytablet.png';

export const ContainerPublic = styled.div`
  @media screen and (min-width: 320px) {
    background: radial-gradient(
        320px at left top,
        rgba(176, 232, 185, 0.2),
        rgba(56, 56, 71, 0)
      ),
      #383847;
    height: 100vh;
    background-attachment: fixed;
  }
  @media screen and (min-width: 768px) {
    background: radial-gradient(
        420px at center 300px,
        rgba(176, 232, 185, 0.3),
        rgba(56, 56, 71, 0)
      ),
      #383847;
    height: 100vh;
    background-attachment: fixed;
  }
  @media screen and (min-width: 1280px) {
    background: radial-gradient(
        320px at 30% calc(100% - 35%),
        rgba(176, 232, 185, 0.3),
        rgba(56, 56, 71, 0)
      ),
      #383847;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export const BgOverlay = styled.div`
  overflow-y: scroll;
  @media screen and (min-width: 320px) {
    background: radial-gradient(
      320px at left top,
      rgba(176, 232, 185, 0.2),
      rgba(56, 56, 71, 0)
    );

    height: 100vh;
    /* background-attachment: fixed; */
  }
  @media screen and (min-width: 768px) {
    background-image: url(${bgOverlayTablet});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center calc(50% + 70px);
    height: 100%;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgBM});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center calc(50% + 70px);
    height: 100%;
  }
`;

export const ContentImage = styled.div`
  background-attachment: fixed;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    background: url(${cashTablet}),
      radial-gradient(
        420px at center 400px,
        rgba(176, 232, 185, 0.1),
        rgba(56, 56, 71, 0)
      );
    background-repeat: no-repeat;
    background-position: calc(10%) calc(100% - 80%);
    background-position-x: 50%;

    height: 100vh;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${wallet});
    background-repeat: no-repeat;
    background-position: calc(10%) calc(100% - 40%);
    background-size: 647px auto;
    max-width: 2000px;
    margin: 0 auto;
  }
`;

export const ContainerPrivate = styled.div`
  overflow-y: scroll;
  @media screen and (min-width: 320px) {
    background-color: #31313d;
  }
  @media screen and (min-width: 768px) {
    background: radial-gradient(
        320px at 10% calc(100% - 80%),
        rgba(176, 232, 185, 0.3),
        rgba(56, 56, 71, 0)
      ),
      #383847;

    height: 100vh;
  }
  @media screen and (min-width: 1280px) {
    background: radial-gradient(
        320px at 10% calc(100% - 80%),
        rgba(176, 232, 185, 0.3),
        rgba(56, 56, 71, 0)
      ),
      #383847;

    height: 100vh;
  }
`;
