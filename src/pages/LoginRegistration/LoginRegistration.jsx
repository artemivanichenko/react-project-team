import LoginForm from 'components/LoginForm/LoginForm';
import { FormWrapper } from 'pages/LoginRegistration/LoginRegistration.styled.jsx';
import wallet from 'images/wallet.png';

const LoginRegistration = () => {
  return (
    <FormWrapper>
      <img src={wallet} alt="wallet" />
      <LoginForm />
    </FormWrapper>
  );
};


export default LoginRegistration;
