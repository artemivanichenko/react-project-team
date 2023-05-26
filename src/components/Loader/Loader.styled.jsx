import styled from "@emotion/styled";
import { LineWave } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   width: 100vw;
height: 100vh;
padding-left: 50px;
margin-top: -50px;

@media screen and (max-width: 768px ) {
    padding-left: 140px;
    padding-top: -130px;
}
`

export const Container = styled.div`
width: 100vw;
height: 120vh;
margin: 0;
background-color:       #383847;

@media screen and (min-width: 320px) {
    background: radial-gradient(
        360px at left top,
        rgba(176, 232, 185, 0.2),
        rgba(56, 56, 71, 0)
      ),
      #383847;
  }
  @media screen and (min-width: 768px) {
    background: radial-gradient(
        420px at center 300px,
        rgba(176, 232, 185, 0.3),
        rgba(56, 56, 71, 0)
      ),
      #383847;
    
  }
  @media screen and (min-width: 1280px) {
    background: radial-gradient(
        320px at 30% calc(100% - 35%),
        rgba(176, 232, 185, 0.3),
        rgba(56, 56, 71, 0)
      ),
      #383847;
    background-repeat: no-repeat;
  }
`

export const Wave = styled(LineWave)`
margin: 0 auto;
padding: 100px

`