import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionPeriod } from 'redux/reports/reportsOperations';
import {
  selectExpensesTotal,
  selectIncomesTotal,
} from 'redux/reports/reportsSelectors';

const TransactionPeriodDataTotal = () => {
  //   const IncomesTotal = useSelector(selectIncomesTotal);
  //   const ExpensesTotal = useSelector(selectExpensesTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(getTransactionPeriod(data));
    }
  }, [data, dispatch]);

  return (
    <section>
      {/* <p>Expenses: {IncomesTotal} UAH</p> <p>Income:{ExpensesTotal} UAH</p> */}
    </section>
  );
};

export default TransactionPeriodDataTotal;
