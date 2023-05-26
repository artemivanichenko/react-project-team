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
    const newBalance = Number.parseFloat(
      e.currentTarget.elements.balance.value
    );
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
        onValueChange={(values, sourceInfo) => {
          console.log(values, sourceInfo);
        }}
      />
      <ButtonStyled type="submit">Confirm</ButtonStyled>
    </FormStyled>
  );
};

export default Balance;
