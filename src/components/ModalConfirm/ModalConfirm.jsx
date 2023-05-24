import {
  ModalContent,
  Button,
  TitleModal,
  ModalBackDrop,
  IconButtonClose,
} from './ModalConfirm.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ModalConfirm = ({ title, onConfirm, onClose }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalBackDrop>
      <ModalContent>
        <IconButtonClose onClick={handleClose}>
          <CloseOutlinedIcon fontSize="medium" />
        </IconButtonClose>
        <TitleModal className="modal-title">{title}</TitleModal>

        <Button
          className="modal-confirm"
          onClick={handleConfirm}
          style={{ marginRight: '15px' }}
        >
          Yes
        </Button>
        <Button className="modal-cancel" onClick={handleClose}>
          No
        </Button>
      </ModalContent>
    </ModalBackDrop>
  );
};

export default ModalConfirm;
