import * as React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterDate } from 'redux/transaction/transactionSelectors';

import {
  BtnDelStyled,
  ImgDelStyled,
  TableColumnStyled,
  TableHeadColumnStyled,
  TableHeadRowStyled,
  TableRowStyled,
  TableStyled,
} from './TransactionsList.styled';
import { selectionExpenses, selectionIncome } from '../../shared/category';
import icon from '../../images/delete.svg';
import { deleteTransaction } from 'redux/transaction/transactionOperations';

const TransactionsList = () => {
  const params = useParams();
  const expenses = params.expenses;
  const dispatch = useDispatch();
  const transactionExpenses = useSelector(state => state.transaction.expenses);
  const transactionIncomes = useSelector(state => state.transaction.incomes);
  const dateFilter = useSelector(selectFilterDate);
  let transaction;
  const categoryChange = [...selectionExpenses, ...selectionIncome];

  expenses === 'income'
    ? (transaction = transactionIncomes.filter(el => el.date === dateFilter))
    : (transaction = transactionExpenses.filter(el => el.date === dateFilter));

  return (
    <TableStyled>
      <TableHeadRowStyled>
        <TableHeadColumnStyled>DATE</TableHeadColumnStyled>
        <TableHeadColumnStyled>DESCRIPTION</TableHeadColumnStyled>
        <TableHeadColumnStyled>CATEGORY</TableHeadColumnStyled>
        <TableHeadColumnStyled>SUM</TableHeadColumnStyled>
        <TableHeadColumnStyled></TableHeadColumnStyled>
      </TableHeadRowStyled>
      {transaction.map(el => (
        <TableRowStyled key={el._id}>
          <TableColumnStyled>{el.date}</TableColumnStyled>
          <TableColumnStyled>{el.description}</TableColumnStyled>
          <TableColumnStyled>
            {categoryChange
              .filter(({ value, label, trans }) => trans === el.category)
              .map(el => el.label)
              .join()}
          </TableColumnStyled>
          <TableColumnStyled>{el.amount} UAH.</TableColumnStyled>
          <TableColumnStyled>
            <BtnDelStyled
              type="button"
              onClick={() => dispatch(deleteTransaction(el.id))}
            >
              <ImgDelStyled src={icon} />
            </BtnDelStyled>
          </TableColumnStyled>
        </TableRowStyled>
      ))}
    </TableStyled>
  );
};

export default TransactionsList;
