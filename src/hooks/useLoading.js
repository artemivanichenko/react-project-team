import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import { selectReportsIsLoading } from 'redux/reports/reportsSelectors';
import { selectTransactionIsLoading } from 'redux/transaction/transactionSelectors';

export const useLoading = () => {
  const authIsLoading = useSelector(selectAuthIsLoading);

  const reportsIsLoading = useSelector(selectReportsIsLoading);

  const transactionIsLoading = useSelector(selectTransactionIsLoading);

  const isLoading = authIsLoading ?? reportsIsLoading ?? transactionIsLoading;
  return { isLoading };
};
