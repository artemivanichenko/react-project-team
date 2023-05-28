import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import {
  selectMonthExpenses,
  selectMonthIncome,
  selectIncome,
  selectExpenses,
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

const Summary = () => {
  const {transactionType} = useParams();

  const monthExpenses = useSelector(selectMonthExpenses);
  const monthIncome = useSelector(selectMonthIncome);
  const transactionIncome = useSelector(selectIncome);
  const transactionExpenses = useSelector(selectExpenses);

  const conditionalSelect = transactionType === 'expenses'
    ? monthExpenses : monthIncome;

  const sumValues = Object.values(conditionalSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    transactionType === 'expenses'
      ? monthExpenses.length === 0 && dispatch(getTransactionExpense())
      : monthIncome.length === 0 && dispatch(getTransactionIncome());
  }, [dispatch, transactionType, transactionIncome, transactionExpenses, monthExpenses, monthIncome]);

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
          {sumValues.map((sum, idx) => {
            if (idx <= currentMonth) {
              if (sum === 'N/A') {
                sum = 0;
              }
              return (
                <ListItem key={monthEng[idx]}>
                  <MonthStyled>{monthEng[idx]}</MonthStyled>
                  <SumStyled>{sum}</SumStyled>
                </ListItem>
              );
            }
            return null;
          })}
        </ListStyled>
      </DivStyled>
    </WrapperStyled>
  );
};

export default Summary;
