import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  @media screen and (max-width: 1370px){
  margin: 50px 50px 0px 0;
  } 
  @media screen and (min-width: 768px) and (max-width: 1281px) {
      padding: 40px 20px;
      margin-top: 220px;
      margin-left: 70px;
    }
  @media screen and (min-width: 320px) and (max-width: 500px){
    margin: 20px 15px;
    width: 220px;
  }
  @media screen and (min-width: 500px) and (max-width: 767px){
    margin: 50px auto;
    width: 320px;
  }
  margin: 50px 150px 0px 0;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
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
    background-color: #dddddd;
    transition: all 300ms ease 0s;
  }
  margin-bottom: 32px;
  @media screen and (min-width: 320px) and (max-width: 500px){
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
  margin-bottom: 32px;
   @media screen and (min-width: 320px) and (max-width: 500px){
    min-width: 240px;
    text-align: center;
    margin: 0 auto;
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
   @media screen and (min-width: 320px) and (max-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const LabelTitle = styled.p`
  margin: 10px 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 288px;
  padding: 16px 16px;
  background: #f6f7fb;
  border-radius: 16px;
  border: none;
  box-shadow: 1px 3px 5px rgba(21, 23, 21, 0.656);
  @media screen and (min-width: 320px) and (max-width: 500px){
    width: 200px;
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
   @media screen and (min-width: 320px) and (max-width: 500px){
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
  @media screen and (min-width: 320px) and (max-width: 500px){
    width: 116px;
  height: 38px;
  }
`;

export const Required = styled.p `
  color: #FE4566;
  font-size: smaller;
`