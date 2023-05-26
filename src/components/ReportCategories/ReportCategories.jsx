import { Button, ThemeProvider } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectExpensesData,
  selectIncomesData,
} from 'redux/reports/reportsSelectors';
import * as images from '../../images/Categories/index.js';
import { createTheme } from '@mui/material/styles';
import {
  NavLinkStyled,
  StyledBox,
  StyledButtonReport,
  StyledImages,
  StyledList,
  StyledText,
  StyledWrapper,
} from './ReportCategories.styled.js';
import { selectionExpenses, selectionIncome } from 'shared/category.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#60C470',
      darker: '#072904',
    },
  },
});

const ReportCategories = () => {
  const [reportChoice, setReportChoice] = useState('expenses');
  const reportIncomes = useSelector(selectIncomesData);
  const reportExpenses = useSelector(selectExpensesData);
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

  const filteredExpensesArray = expensesArray
    .map(({ name, total }) => {
      const filteredArray = selectionExpenses.filter(
        ({ value, label, trans }) => trans === name
      );

      return [{ total, ...filteredArray[0] }];
    })
    .flat(Infinity);
  const filteredIncomesArray = incomesArray
    .map(({ name, total }) => {
      const filteredArray = selectionIncome.filter(
        ({ value, label, trans }) => trans === name
      );

      return [{ total, ...filteredArray[0] }];
    })
    .flat(Infinity);

  return (
    <StyledBox>
      <StyledButtonReport>
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
      </StyledButtonReport>
      <StyledList>
        {reportChoice === 'expenses'
          ? filteredExpensesArray
              .sort((a, b) => b.total - a.total)
              .map(({ value, label, total }) => (
                <li key={value}>
                  <StyledText> {total}</StyledText>
                  <NavLinkStyled to={`${value}`}>
                    <StyledWrapper>
                      <StyledImages src={images[value]} alt={label} />
                    </StyledWrapper>
                  </NavLinkStyled>
                  <StyledText> {label}</StyledText>
                </li>
              ))
          : filteredIncomesArray
              .sort((a, b) => b.total - a.total)
              .map(({ value, label, total }) => (
                <li key={value}>
                  <StyledText> {total}</StyledText>
                  <NavLinkStyled to={`${value}`}>
                    <StyledWrapper>
                      <StyledImages src={images[value]} alt={label} />
                    </StyledWrapper>
                  </NavLinkStyled>
                  <StyledText> {label}</StyledText>
                </li>
              ))}
      </StyledList>
    </StyledBox>
  );
};
export default ReportCategories;
