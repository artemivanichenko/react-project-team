import { useSelector } from 'react-redux';
import {
  selectExpensesTotal,
  selectIncomesTotal,
} from 'redux/reports/reportsSelectors';
import {
  StyledBox,
  StyledSection,
  StyledText,
  StyledTotalAmount,
} from './TransactionPeriodDataTotal.styled';

const TransactionPeriodDataTotal = () => {
  const IncomesTotal = useSelector(selectIncomesTotal);
  const ExpensesTotal = useSelector(selectExpensesTotal);

  return (
    <StyledSection>
      <StyledBox>
        <StyledText>
          Expenses:
          <StyledTotalAmount red>
            {' '}
            - {IncomesTotal.toFixed(2)} UAH
          </StyledTotalAmount>
        </StyledText>
        <StyledText>
          Income:{' '}
          <StyledTotalAmount>
            {' '}
            + {ExpensesTotal.toFixed(2)} UAH
          </StyledTotalAmount>
        </StyledText>
      </StyledBox>
    </StyledSection>
  );
};

export default TransactionPeriodDataTotal;
