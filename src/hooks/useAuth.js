import { useSelector } from 'react-redux';
import { selectIsUserAuthorized } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsUserAuthorized);
  return isLoggedIn;
};
