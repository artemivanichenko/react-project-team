import logo from 'images/logo.png';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { useState } from 'react';
import ModalConfirm from 'components/ModalConfirm/ModalConfirm';

const Header = () => {
  const dispatch = useDispatch();
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
    <header>
      <img src={logo} alt="logo" />
      <div>
        <p>UserName</p>
        <button onClick={handleOpen} type="button">
          Exit
        </button>
        {showModal && (
          <ModalConfirm
            title="Do you really want to leave?"
            onClose={handleClose}
            onConfirm={handleLogout}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
