import logo from 'images/logo.png';

import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { Conteiner, Navigate, Title, Btn, Logout, HeaderBgr } from './Header.styled'
import { useSelector } from 'react-redux';
import { grey } from '@mui/material/colors';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.userData);
  console.log(userName);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <HeaderBgr>
      <Conteiner>
        <img src={logo} alt="logo" />
        <Navigate>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              margin: 1.6,
              marginRight: -5,
              fontSize: 14,
              background: grey,
            }}
          >
            {userName && userName.email.slice(0, 1).toUpperCase()}
          </Avatar>
          <Title>{userName && userName.email.split('@')[0]}</Title>
          <Logout onClick={handleLogout} type="button">
            <OutputOutlinedIcon
              sx={{ width: 24, height: 24, margin: 2.3, marginRight: 0 }}
              htmlColor="white"
              alt="logout"
            ></OutputOutlinedIcon>
          </Logout>
        <Btn  onClick={handleLogout} type="button" >
          Exit
        </Btn>
      </Navigate>

      </Conteiner>
    </HeaderBgr>
  );
};

export default Header;
