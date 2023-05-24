import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectMonthExpenses,
  selectMonthIncome,
} from 'redux/transaction/transactionSelectors';
import {
  getTransactionExpense,
  getTransactionIncome,
} from 'redux/transaction/transactionOperations';
import {
  WrapperStyled,
  TextStyled,
  DivStyled,
  ListStyled,
  ListItem,
  MonthStyled,
  SumStyled,
} from './Summary.styled';

const Summary = ({ type = 'expense' }) => {
  let conditionalSelect = null;
  const monthExpenses = useSelector(selectMonthExpenses);
  const monthIncome = useSelector(selectMonthIncome);

  type === 'expense'
    ? (conditionalSelect = monthExpenses)
    : (conditionalSelect = monthIncome);

  const sumValues = Object.values(conditionalSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    type === 'expense'
      ? dispatch(getTransactionExpense())
      : dispatch(getTransactionIncome());
  }, [dispatch, type]);

  const currentMonth = new Date().getMonth();
  const monthEng = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <WrapperStyled>
      <TextStyled>Summary</TextStyled>
      <DivStyled>
        <ListStyled>
          {sumValues.map(
            (sum, idx) =>
              idx <= currentMonth && (
                <ListItem key={monthEng[idx]}>
                  <MonthStyled>{monthEng[idx]}</MonthStyled>
                  <SumStyled>{sum}</SumStyled>
                </ListItem>
              )
          )}
        </ListStyled>
      </DivStyled>
    </WrapperStyled>
  );
};

export default Summary;
