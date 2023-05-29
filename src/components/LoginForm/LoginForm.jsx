import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from 'redux/auth/authOperations';
import {
  ContainerStyled,
  FormWrapper,
  Title,
  GoggleLink,
  Subtitle,
  Label,
  Input,
  ButtonWrapper,
  LabelTitle,
  LabelWrapper,
  LoginButton,
  RegisterButton,
  Required,
} from './LoginForm.styled';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { selectAuthError } from 'redux/auth/authSelectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [inputPassword, setInputPassword] = useState('');
  const [inputName, setInputName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  toast.error(error, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitted(true);
    const formValues = {
      email: inputName,
      password: inputPassword,
    };
    const submit = event.nativeEvent.submitter.name;
    if (inputPassword && inputName)
      submit === 'login'
        ? dispatch(loginUser(formValues))
        : dispatch(registerUser(formValues));
  };
  const handleChangePassword = event => {
    const inputValue = event.target.value;
    setInputPassword(inputValue);
  };
  const handleChangeName = event => {
    const inputValue = event.target.value;
    setInputName(inputValue);
  };

  return (
    <>
    {error && 
    <ToastContainer
    position="top-right"
    autoClose={5000}
    limit={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>}
      <ContainerStyled>
        <FormWrapper>
          <Title>You can log in with your Google Account:</Title>
          <GoggleLink href="https://kapusta-backend.goit.global/auth/google">
            <FcGoogle size={18} />
            Google
          </GoggleLink>
          <form onSubmit={handleSubmit}>
            <Subtitle>
              Or log in using an email and password, after registering:
            </Subtitle>
            <LabelWrapper>
              <Label>
                <LabelTitle>
                  {inputName.length === 0 && isSubmitted && (
                    <span style={{ color: '#FE4566' }}>&#42;</span>
                  )}
                  Email:
                </LabelTitle>
                <Input
                  onChange={handleChangeName}
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                />
                {inputName.length === 0 && isSubmitted && (
                  <Required>This is a required field</Required>
                )}
              </Label>
              <Label>
                <LabelTitle>
                  {inputPassword.length === 0 && isSubmitted && (
                    <span style={{ color: '#FE4566' }}>&#42;</span>
                  )}
                  {inputPassword.length > 1 && inputPassword.length < 8 && (
                    <span style={{ color: '#FE4566' }}>&#42;</span>
                  )}
                  Password:
                </LabelTitle>
                <Input
                  onChange={handleChangePassword}
                  type="password"
                  name="password"
                  placeholder="your password"
                />
                {inputPassword.length === 0 && isSubmitted && (
                  <Required>This is a required field</Required>
                )}
                {inputPassword.length > 1 && inputPassword.length < 8 && (
                  <Required>Password must be at least 8 characters</Required>
                )}
              </Label>
            </LabelWrapper>
            <ButtonWrapper>
              <LoginButton name="login" type="submit">
                Log in
              </LoginButton>
              <RegisterButton name="register" type="submit">
                Registration
              </RegisterButton>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </ContainerStyled>
    </>
  );
};

export default LoginForm;
