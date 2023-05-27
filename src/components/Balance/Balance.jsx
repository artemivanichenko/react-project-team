import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBalance } from 'redux/transaction/transactionOperations';
import {
  selectBalance,
  selectExpenses,
} from 'redux/transaction/transactionSelectors';
import {
  TooltipStyled,
  FormStyled,
  TextStyled,
  BoxStyled,
  ButtonStyled,
  StyledNumericFormat,
} from './Balance.styled';

const Balance = () => {
  const [open, setOpen] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(true);
  const [toggleClose, setToggleClose] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const balance = useSelector(selectBalance);
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newBalance = Number.parseFloat(
      e.currentTarget.elements.balance.value
    );
    console.log(newBalance);
    dispatch(addBalance({ newBalance }));
  };

  // if (balance === 0 && expenses.length === 0)
  if (balance === 0 && toggleOpen) {
    handleOpen();
    setToggleOpen(false);
  }
  // } else {
  //   handleClose();
  //   setToggle(true);
  // }

  if (balance !== 0 && toggleClose) {
    handleClose();
    setToggleClose(false);
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <TextStyled>Balance:</TextStyled>
      <BoxStyled>
        <TooltipStyled
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Hello! To get started, enter the current balance of your account! 
          You can't spend money until you have it :)"
          arrow
          placement="bottom-end"
        >
          <div>
            <StyledNumericFormat
              required
              name="balance"
              value={balance}
              suffix=" UAH"
              placeholder="00.00 UAH"
              onValueChange={(values, sourceInfo) => {
                console.log(values, sourceInfo);
              }}
            />
          </div>
        </TooltipStyled>
        <ButtonStyled type="submit">Confirm</ButtonStyled>
      </BoxStyled>
    </FormStyled>
  );
};

export default Balance;
