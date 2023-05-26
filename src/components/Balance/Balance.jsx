import { useDispatch, useSelector } from 'react-redux';
import { addBalance } from 'redux/transaction/transactionOperations';
import { selectBalance } from 'redux/transaction/transactionSelectors';
import { Form, Title } from './Balance.styled'
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
    <Form onSubmit={handleSubmit}>
      <label>
        <Title>Balance:</Title>
        <input type="number" placeholder="00.00 UAH" name="balance" />
      </label>
      <button type="submit">Confirm</button>
    </Form>
  );
};

export default Balance;
