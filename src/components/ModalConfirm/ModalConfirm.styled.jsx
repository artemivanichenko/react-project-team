import styled from '@emotion/styled';

export const IconButtonClose = styled.button`
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: inherit;

  cursor: pointer;

  & svg {
    fill: #c7ccdc;
  }
  &:hover,
  :focus {
    & svg {
      fill: #ffffff;
    }
  }
`;

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: #383847;
  box-shadow: inset 0px 2px 14px rgba(132, 132, 132, 0.2);
  border-radius: 16px;

  height: 175px;

  text-align: center;
  @media screen and (min-width: 320px) {
    width: 280px;
    padding: 40px 37px;
  }
  @media screen and (min-width: 460px) {
    width: 380px;
    padding: 40px 57px;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  background-color: inherit;
  border: 2px solid #474759;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #c7ccdc;
  &:active,
  :hover,
  :focus {
    background-color: #42a652;
    border: none;
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    border-radius: 16px;
  }
  @media screen and (min-width: 320px) {
    width: 94px;
    height: 44px;
  }
  @media screen and (min-width: 460px) {
    width: 125px;
    height: 44px;
  }
`;

export const TitleModal = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  letter-spacing: 0.02em;

  color: #c7ccdc;
  margin-bottom: 32px;
  margin-top: 0px;
`;
