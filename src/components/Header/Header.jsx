import logo from 'images/logo.png';
import vectorhead from 'images/vectorhead.png';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { Conteiner, Navigate, Title, Btn,Logout, Psevdo } from './Header.styled'
import { grey } from '@mui/material/colors';



const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Conteiner>
      <img src={logo} alt="logo" />
      <Navigate>
        <Avatar sx={{ width: 32, height: 32,margin:1.6 ,marginRight:-5, fontSize:14, background:grey
}}>U</Avatar>
        {/* <User src={user} alt="logo" /> */}
        <Title>
          UserName
        </Title>
        <Logout
          onClick={handleLogout}
          type="button">
        <OutputOutlinedIcon
          sx={{width:24, height:24, margin: 2.3, marginRight:0}}
          htmlColor="white"
          alt="logout"
          >
          </OutputOutlinedIcon>
          </Logout>
        <Btn  onClick={handleLogout} type="button" >
          <Psevdo src={vectorhead} alt="logo" />
          Exit
        </Btn>
      </Navigate>
      
      </Conteiner>
  );
};

export default Header;
