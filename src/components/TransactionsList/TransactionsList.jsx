import * as React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterDate } from 'redux/transaction/transactionSelectors';

import {
  BtnDelStyled,
  SvgStyled,
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
    ? (transaction = transactionIncomes
        .filter(el => el.date.includes(dateFilter))
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)))
    : (transaction = transactionExpenses
        .filter(el => el.date.includes(dateFilter))
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)));
  
  console.log('trans', transaction.length);

  return (
    <TableStyled>
      <thead>
        <TableHeadRowStyled>
          <TableHeadColumnStyled>DATE</TableHeadColumnStyled>
          <TableHeadColumnStyled>DESCRIPTION</TableHeadColumnStyled>
          <TableHeadColumnStyled>CATEGORY</TableHeadColumnStyled>
          <TableHeadColumnStyled>SUM</TableHeadColumnStyled>
          <TableHeadColumnStyled></TableHeadColumnStyled>
        </TableHeadRowStyled>
      </thead>
      <tbody>
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
            <TableColumnStyled data-color={expenses}>
              {expenses === 'income'
                ? el.amount.toFixed(2)
                : `-${el.amount.toFixed(2)}`}{' '}
              UAH.
            </TableColumnStyled>
            <TableColumnStyled>
              <BtnDelStyled
                type="button"
                onClick={() => dispatch(deleteTransaction(el._id))}
              >
                <SvgStyled src={icon} />
              </BtnDelStyled>
            </TableColumnStyled>
          </TableRowStyled>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default TransactionsList;
