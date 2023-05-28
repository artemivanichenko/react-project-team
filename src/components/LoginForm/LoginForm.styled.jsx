import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  @media screen and (min-width: 1281px) {
    margin: 120px 150px 0px 125px;

    max-width: 392px;
    padding: 52px;
  }
  @media screen and (min-width: 768px) and (max-width: 1281px) {
    padding: 52px;
    margin: 0 auto;
    margin-top: 294px;
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin: 12px auto;
    max-width: 280px;
    width: 100%;
    padding: 32px 20px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    /* margin: 50px auto; */
    max-width: 280px;
    min-width: 280px;
    margin-top: 12px;
    padding: 32px 20px;
  }
  box-shadow: inset 0px 2px 14px rgba(132, 132, 132, 0.2);
  border-radius: 30px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 16px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  gap: 10px;
  color: black;
  background-color: #f6f7fb;
  &:hover {
    background-color: #dddddd;
    transition: all 300ms ease 0s;
  }
  margin-bottom: 32px;
  @media screen and (min-width: 320px) and (max-width: 500px) {
    margin-top: 20px;
  }
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
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 500px) {
    max-width: 240px;
    text-align: start;
    margin: 0;
    font-size: 12px;
  }
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
  text-align: start;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;;
    justify-content: flex-start;
  }
`;
export const LabelTitle = styled.p`
  margin: 12px 10px 8px;
  text-align: start;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 288px;
  padding: 16px 16px;
  background: #f6f7fb;
  border-radius: 16px;
  border: none;
  box-shadow: 1px 3px 5px rgba(21, 23, 21, 0.656);
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    width: 240px;
  }
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
  margin-top: -15px;

  cursor: pointer;
  &:hover {
    background-color: #308e3f;
    transition: all 300ms ease 0s;
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
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 116px;
    height: 38px;
  }
`;
export const RegisterButton = styled.button`
  background: #f5f6fb;

  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  width: 136px;
  height: 44px;
  margin-top: -15px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
    transition: all 300ms ease 0s;
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
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 116px;
    height: 38px;
  }
`;

export const Required = styled.p`
  color: #fe4566;
  font-size: 10px;
`;

export const ContainerStyled = styled.div`
max-width: 100%;
display: flex;
  @media screen and (min-width: 480px) {
    max-width: 320px;
    width: 100%;
margin: 0 auto;
justify-content: center;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin: 0 auto;
    width: unset;

  }
  @media screen and (min-width: 1281px) {
    max-width: 1098px;
    justify-content: flex-end;
    margin: 0;
  }
`;
