import styled from '@emotion/styled';

export const WrapStyled = styled.div`
  display: flex;
  gap: 32px;
  padding: 32px 0 60px;
`;
export const FormStyled = styled.form`
  display: flex;
`;

export const BtnStyled = styled.button`
  width: 136px;
  height: 44px;
  margin-left: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17x;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #ffffff;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border: 2px solid #474759;
  border-radius: 16px;

  &:first-of-type {
    margin-left: 32px;
    background: #42a652;
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    border: none;
    border-radius: 16px;
  }
`;
