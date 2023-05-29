import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0,);
  z-index: 120;
  @media screen and (max-width: 767px){
    background: radial-gradient(
      320px at left top,
      rgba(176, 232, 185, 0.8),
      rgba(56, 56, 71)
    );
  }
`;

export const ModalBox = styled.div`
  height: 350px;
  width: 100vw;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
`;

export const StyledBtn = styled.button`
  margin: 16px 66px;
  border: none;
  outline: none;
  background: transparent;
  color: #f6f7fb;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
font-size: 12px;
`;
