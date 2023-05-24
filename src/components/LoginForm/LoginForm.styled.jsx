import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  padding: 50px 30px 60px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  align-items: center;
  width: 392px;
  background-color: #383847;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));
`;
export const Title = styled.h1`
  color: #f6f7fb;
  width: 218px;
  height: 38px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
`;
export const GoggleLink = styled.a`
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 16px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  gap: 10px;
  color: black;
  background-color: #f6f7fb;
  &:hover {
    background-color: #ededed;
  }
  margin-bottom: 32px;
`;

export const Subtitle = styled.h2`
width: 288px;
  color: #f6f7fb;
  height: 32px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 40px;
`;
export const Label = styled.label`
  color: #f6f7fb;
  font-weight: 200;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;
export const LabelTitle = styled.p`
  margin-left: 10px;
`;

export const Input = styled.input`
  width: 288px;
  padding: 16px 16px;
  background: #f6f7fb;
  border-radius: 16px;
  border: none;
  box-shadow: 1px 3px 5px rgba(21, 23, 21, 0.656);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
export const LoginButton = styled.button`
  background: #42a652;
  box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
  border-radius: 16px;
  border: none;
  width: 136px;
  height: 44px;
  cursor: pointer;
  &:hover {
    background-color: #308e3f;
  }
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
`;
export const RegisterButton = styled.button`
  background: #f5f6fb;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: none;
  width: 136px;
  height: 44px;
  cursor: pointer;
  &:hover {
    background-color: #e4e5e9;
  }
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #1f1f27;
`;

export const Required = styled.p `
  color: #FE4566;
`