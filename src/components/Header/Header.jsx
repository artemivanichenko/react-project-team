import coin from 'images/coin.png';
import { useAuth } from 'hooks/useAuth';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import {
  Conteiner,
  Navigate,
  Title,
  Btn,
  Logout,
  HeaderBgr,
  Logo
} from './Header.styled';
import { useSelector } from 'react-redux';
import { grey } from '@mui/material/colors';
import ModalConfirm from 'components/ModalConfirm/ModalConfirm';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const color = grey[700];
  const style ={marginBottom:-2}
  const userName = useSelector(state => state.auth.email);
  const isLoggedIn = useAuth();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <HeaderBgr>
        <Conteiner >
          <Logo >Budget B
            <img src={coin} alt="coin" style={style} />ss</Logo>
          {isLoggedIn && (
            <Navigate>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  margin: 1.6,
                  marginRight: -5,
                  fontSize: 14,
                  background: color,
                }}
              >
                {userName && userName.slice(0, 1).toUpperCase()}
              </Avatar>
              <Title>{userName && userName.split('@')[0]}</Title>
              <Logout >
                <OutputOutlinedIcon
                  onClick={handleOpen} type="button"
                  sx={{ width: 24, height: 24, margin: 2.3, marginRight: 0 }}
                  htmlColor="white"
                  alt="logout"
                ></OutputOutlinedIcon>
              </Logout>
              <Btn onClick={handleOpen} type="button">
                Exit
              </Btn>
            </Navigate>
          )}
        </Conteiner>
      </HeaderBgr>
      {showModal && (
        <ModalConfirm
          title="Do you really want to leave?"
          onClose={handleClose}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
};

export default Header;
