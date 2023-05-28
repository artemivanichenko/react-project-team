import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBalance } from 'redux/transaction/transactionOperations';
import {
  selectBalance,
  selectExpenses,
  selectIncome,
} from 'redux/transaction/transactionSelectors';
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
  const [newBalance, setNewBalance] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const balance = useSelector(selectBalance);
  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncome);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newBalance > 0) {
      dispatch(addBalance({ newBalance }));
    }
  }, [newBalance, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    setNewBalance(Number.parseFloat(e.currentTarget.elements.balance.value));
    if (newBalance <= 0) {
      return toast.warn('The balance should be positive!');
    }
  };

  if (balance === 0 && toggleOpen && expenses.length === 0 && incomes.length === 0) {
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
                // console.log(values, sourceInfo);
              }}
            />
          </div>
        </TooltipStyled>
        <ButtonStyled type="submit">Confirm</ButtonStyled>
      </BoxStyled>
      {newBalance <= 0 && (
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      )}
    </FormStyled>
  );
};

export default Balance;
