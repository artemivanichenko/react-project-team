import { useSelector } from 'react-redux';
import {
  selectExpensesTotal,
  selectIncomesTotal,
} from 'redux/reports/reportsSelectors';
import {
  StyledBox,
  StyledText,
  StyledTotalAmount,
} from './TransactionPeriodDataTotal.styled';

const TransactionPeriodDataTotal = () => {
  const IncomesTotal = useSelector(selectIncomesTotal);
  const ExpensesTotal = useSelector(selectExpensesTotal);

  return (
    <StyledBox>
      <StyledText>
        Expenses:
        <StyledTotalAmount red> - {IncomesTotal} UAH</StyledTotalAmount>
      </StyledText>
      <StyledText>
        Income: <StyledTotalAmount> + {ExpensesTotal} UAH</StyledTotalAmount>
      </StyledText>
    </StyledBox>
  );
};

export default TransactionPeriodDataTotal;
