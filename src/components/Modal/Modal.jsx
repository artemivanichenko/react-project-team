import AddTransaction from 'components/AddTransaction/AddTransaction';
import { createPortal } from 'react-dom';
import { ModalBox, Overlay } from './Modal.styled';

const Modal = () => {
  const modalRoot = document.querySelector('#root');

  return createPortal(
    <Overlay>
     <ModalBox> <AddTransaction /></ModalBox>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
