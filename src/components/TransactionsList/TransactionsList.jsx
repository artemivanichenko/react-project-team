import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const TransactionsList = () => {
  const params = useParams();
  const expenses = params.expenses;

  const transactionExpenses = useSelector(state => state.transaction.expenses);
  const transactionIncomes = useSelector(state => state.transaction.incomes);
  let transaction;

  expenses === 'income'
    ? (transaction = transactionIncomes)
    : (transaction = transactionExpenses);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper} style={{ width: 'fit-content' }}>
      <Table sx={{ width: 746 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>DATE</StyledTableCell>
            <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
            <StyledTableCell align="right">CATEGORY</StyledTableCell>
            <StyledTableCell align="right">SUM</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map(row => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsList;
