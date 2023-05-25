import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import {
  selectExpensesData,
  selectIncomesData,
} from 'redux/reports/reportsSelectors';
import * as images from '../../images/Categories/index.js';

const ReportCategories = () => {
  // const params = useParams();
  // const expenses = params.expenses;
  // let report;
  // expenses === 'income' ? (report = reportIncomes) : (report = reportExpenses);

  // console.log(expenses);

  const reportIncomes = useSelector(selectIncomesData);
  const reportExpenses = useSelector(selectExpensesData);
  // const arrIncomesData = Object.values(IncomesData);
  // console.log(Object.keys(reportExpenses));
  // console.log(reportExpenses);

  const objectToArray = object => {
    return Object.entries(object).map(([name, value]) => {
      return [name, value];
    });
  };

  const expensesArray = objectToArray(reportExpenses);
  const incomesArray = objectToArray(reportIncomes);

  console.log(expensesArray);

  return (
    <>
      {true
        ? expensesArray.map(e => (
            <>
              <p> {e[0]}</p>
              <img src={images.alcohol} alt="armchair" />
              <p> {e[1].total}</p>
            </>
          ))
        : incomesArray.map(e => (
            <>
              <p>{e[0]}</p>
              <img src="../../images/armchair.png" alt="armchair" />
              <p>{e[1].total}</p>
            </>
          ))}
    </>
  );
};
export default ReportCategories;
