import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from 'redux/auth/authOperations';
import {
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
} from './LoginForm.styled';
import { FcGoogle } from 'react-icons/fc';
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const formValues = {
      email: form.email.value,
      password: form.password.value,
    };
    const submit = event.nativeEvent.submitter.name;
    submit === 'login'
      ? dispatch(loginUser(formValues))
      : dispatch(registerUser(formValues));
  };

  return (
    <FormWrapper>
      <Title>You can log in with your Google Account:</Title>
      <GoggleLink href="https://kapusta-backend.goit.global/auth/google">
        <FcGoogle size={22} />
        Google
      </GoggleLink>
      <form onSubmit={handleSubmit}>
        <Subtitle>
          Or log in using an email and password, after registering:
        </Subtitle>
        <LabelWrapper>
          <Label>
            <LabelTitle>Email:</LabelTitle>
            <Input type="email" name="email" placeholder="your@email.com" />
          </Label>
          <Label>
            <LabelTitle>Password:</LabelTitle>
            <Input
              type="password"
              name="password"
              placeholder="your password"
            />
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
  );
};

export default LoginForm;
