import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TransactionsList = () => {

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

function createData(
  date: string,
  descr: number,
  category: number,
  sum: number,
) {
  return { date, descr, category, sum };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 188 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>DATE</StyledTableCell>
            <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
            <StyledTableCell align="right">CATEGORY&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">SUM&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.descr}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.sum}</StyledTableCell>
                         </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <div>
    //   <table>
    //     <tr>
    //       <th>Date</th>
    //       <th>Description</th>
    //       <th>Category</th>
    //       <th>Sum</th>
    //       <th> </th>
    //     </tr>
    //     <tr>
    //       <td>21.11.2019</td>
    //       <td>My salary</td>
    //       <td>Salary</td>
    //       <td>20 000.00 UAH.</td>
    //       <button type="button">delete</button>
    //     </tr>
    //   </table>
    // </div>
  );
};

export default TransactionsList;
