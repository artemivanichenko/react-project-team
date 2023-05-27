import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBalance } from 'redux/transaction/transactionOperations';
import { selectBalance } from 'redux/transaction/transactionSelectors';
import {
  TooltipStyled,
  FormStyled,
  TextStyled,
  BoxStyled,
  ButtonStyled,
  StyledNumericFormat,
  MessageStyled,
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
  //const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newBalance = Number.parseFloat(
      e.currentTarget.elements.balance.value
    );
    dispatch(addBalance({ newBalance }));
  };

  // if (&& expenses.length === 0)
  if (balance === 0 && toggleOpen) {
    handleOpen();
    setToggleOpen(false);
  }

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
          title={
            <>
              <MessageStyled>
                Hello! To get started, enter the current balance of your
                account!
              </MessageStyled>
              <MessageStyled>
                You can't spend money until you have it :)
              </MessageStyled>
            </>
          }
          arrow
          placement="bottom-end"
        >
          <div>
            <StyledNumericFormat
              required
              decimalScale={2}
              fixedDecimalScale
              //type="number"
              minLength={1}
              maxLength={17}
              value={balance}
              suffix=" UAH"
              placeholder="00.00 UAH"
              name="balance"
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
