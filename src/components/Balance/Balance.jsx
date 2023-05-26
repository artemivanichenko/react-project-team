import { useDispatch, useSelector } from 'react-redux';
import { addBalance } from 'redux/transaction/transactionOperations';
import { selectBalance } from 'redux/transaction/transactionSelectors';
import {
  FormStyled,
  TextStyled,
  ButtonStyled,
  StyledNumericFormat,
} from './Balance.styled';

const Balance = () => {
  const balance = useSelector(selectBalance);
  console.log(balance);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newBalance = Number(e.currentTarget.elements.balance.value);
    console.log(newBalance);
    dispatch(addBalance({ newBalance }));
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <TextStyled>Balance:</TextStyled>
      <StyledNumericFormat
        required
        name="balance"
        value={balance}
        suffix=" UAH"
        placeholder="00.00 UAH"
        //thousandSeparator
        // customInput={TextField}
        // {...materialUITextFieldProps}
        onValueChange={(values, sourceInfo) => {
          console.log(values, sourceInfo);
        }}
      />
      <ButtonStyled type="submit">Confirm</ButtonStyled>
      {/* <Button
        type="submit"
        variant="outlined"
        sx={{
          backgroundColor: 'transparent',
          border: '2px solid #80848F',
          borderRadius: 16,
          width: 125,
          height: 44,
          color: '#C7CCDC',
          '&:hover': {
            backgroundColor: '#42A652',
            border: '2px solid #42A652',
            color: '#F6F7FB',
          },
          //mt: 10,
          //borderTopLeftRadius: 20,
          //borderTopRightRadius: 20,
        }}
      >
        Confirm
      </Button> */}
    </FormStyled>
  );
};

export default Balance;
