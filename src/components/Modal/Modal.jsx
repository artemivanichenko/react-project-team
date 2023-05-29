import { createPortal } from 'react-dom';
import { ModalBox, Overlay } from './Modal.styled';

const Modal = ({children, onClose}) => {
  const modalRoot = document.querySelector('#root');

  return createPortal(
    <Overlay>
        <button type="button" onClick={onClose}>
          To transaction
        </button>
     <ModalBox>{children}</ModalBox>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
