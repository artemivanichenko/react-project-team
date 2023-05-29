import { createPortal } from 'react-dom';
import { ModalBox, Overlay, StyledBtn } from './Modal.styled';
import WestIcon from '@mui/icons-material/West';


const Modal = ({children, onClose}) => {
  const modalRoot = document.querySelector('#root');

  return createPortal(
    <Overlay>
        <StyledBtn type="button" onClick={onClose}>
        <WestIcon sx={{
                  width: 18,
                height: 18,
                marginBottom: -0.2,
                marginRight: 2
            }}> </WestIcon>To transaction
        </StyledBtn>
     <ModalBox>{children}</ModalBox>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
