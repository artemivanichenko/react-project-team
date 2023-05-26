import { Button, ThemeProvider } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { green } from '@mui/material/colors';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import {
  selectExpensesData,
  selectIncomesData,
} from 'redux/reports/reportsSelectors';
import * as images from '../../images/Categories/index.js';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#60C470',
      darker: '#072904',
    },
  },
});

const ReportCategories = () => {
  // const params = useParams();
  // const expenses = params.expenses;
  // let report;
  // expenses === 'income' ? (report = reportIncomes) : (report = reportExpenses);

  // console.log(expenses);
  const [reportChoice, setReportChoice] = useState('expenses');
  const reportIncomes = useSelector(selectIncomesData);
  const reportExpenses = useSelector(selectExpensesData);
  // const arrIncomesData = Object.values(IncomesData);
  // console.log(Object.keys(reportExpenses));
  // console.log(reportExpenses);

  const objectToArray = object => {
    return Object.entries(object).map(([name, { total, ...value }]) => {
      return { name, total, content: [value] };
    });
  };

  const expensesArray = objectToArray(reportExpenses);
  const incomesArray = objectToArray(reportIncomes);
  console.log(expensesArray);
  const handleButtonClick = () => {
    if (reportChoice === 'expenses') {
      setReportChoice('incomes');
    } else {
      setReportChoice('expenses');
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="text"
          startIcon={<ArrowBackIosIcon />}
          type="button"
          onClick={handleButtonClick}
        />
        <p>{reportChoice.toUpperCase()}</p>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          type="button"
          onClick={handleButtonClick}
        />
      </ThemeProvider>
      {true
        ? expensesArray.map(({ name, total }) => (
            <li key={name}>
              <p> {name}</p>
              <img src={images.alcohol} alt="armchair" />
              <p> {total}</p>
            </li>
          ))
        : incomesArray.map(({ name, total }) => (
            <li key={name}>
              <p> {name}</p>
              <img src={images.alcohol} alt="armchair" />
              <p> {total}</p>
            </li>
          ))}
    </>
  );
};
export default ReportCategories;
