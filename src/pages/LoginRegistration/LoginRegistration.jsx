import LoginForm from 'components/LoginForm/LoginForm';
import wallet from 'images/wallet.png';
import { FormWrapper, ImageWrapper, Image } from './LoginRegistration.styled';
const LoginRegistration = () => {
  return (
    <FormWrapper>
      <ImageWrapper>
        <Image src={wallet} alt="wallet" />    
      </ImageWrapper>
      <LoginForm />
    </FormWrapper>
  );
};

export default LoginRegistration;
