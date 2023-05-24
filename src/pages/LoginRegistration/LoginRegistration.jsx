import LoginForm from 'components/LoginForm/LoginForm';
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
