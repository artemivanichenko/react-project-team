import * as React from 'react';
// import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import sprite from 'images/sprite.svg';
import {
  selectFilterDate,
  selectIncome,
  selectExpenses,
} from 'redux/transaction/transactionSelectors';
import {
  BtnDelStyled,
  ScrollWrapStyled,
  StyledAmount,
  StyledDate,
  StyledDescript,
  StyledItem,
  StyledList,
  StyledRight,
  StyledWrap,
  TableColumnStyled,
  TableHeadColumnStyled,
  TableHeadRowStyled,
  TableRowStyled,
  TableStyled,
} from './TransactionsList.styled';
import { selectionExpenses, selectionIncome } from '../../shared/category';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import ModalConfirm from 'components/ModalConfirm/ModalConfirm';
// import { useEffect } from 'react';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactionExpenses = useSelector(selectExpenses);
  const transactionIncomes = useSelector(selectIncome);
  const dateFilter = useSelector(selectFilterDate);

  const { transactionType } = useParams();
  const [delTransaction, setDelTransaction] = useState([]);
  const categoryChange = [...selectionExpenses, ...selectionIncome];

  const transactionIncome = useMemo(() => {
    return transactionIncomes
      .filter(el => el.date.includes(dateFilter))
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  }, [dateFilter, transactionIncomes]);
  const transactionExpense = useMemo(() => {
    return transactionExpenses
      .filter(el => el.date.includes(dateFilter))
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  }, [dateFilter, transactionExpenses]);

  const isRender =
    transactionType === 'income' ? transactionIncome : transactionExpense;
  const transaction = isRender;
  // const isAddTransactions = 9 - transaction.length;
    
  // useEffect(() => {
  //   if (isAddTransactions >= 0) {
  //     for (let i = 0; i < isAddTransactions; i++) {
  //       transaction.push({
  //         _id: i,
  //         date: '',
  //         description: '',
  //         category: '',
  //         amount: '',
  //       });
  //     }
  //   }
  // }, [isAddTransactions, transaction]);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = data => {
    setDelTransaction(data);
    setShowModal(true);
  };

  const handleDeleTransaction = () => {
    dispatch(deleteTransaction(delTransaction));
    setShowModal(false);
  };

  const tableMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div>
      {!tableMobile ? (
        <>
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
          </TableStyled>
          <ScrollWrapStyled>
            <TableStyled>
              <tbody>
                {transaction.map(el => (
                  <TableRowStyled key={el._id}>
                    <TableColumnStyled>{el.date}</TableColumnStyled>
                    <TableColumnStyled>{el.description}</TableColumnStyled>
                    <TableColumnStyled>
                      {categoryChange
                        .filter(
                          ({ value, label, trans }) => trans === el.category
                        )
                        .map(el => el.label)
                        .join()}
                    </TableColumnStyled>
                    <TableColumnStyled data-color={transactionType}>
                      {el.amount === ''
                        ? ''
                        : transactionType === 'income'
                        ? el.amount.toFixed(2)
                        : `-${el.amount.toFixed(2)} UAH.`}
                    </TableColumnStyled>
                    <TableColumnStyled>
                      {typeof el.amount === 'string' ? (
                        ''
                      ) : (
                        <BtnDelStyled
                          type="button"
                          onClick={() => handleOpen([el._id, transactionType])}
                        >
                          <svg>
                            <use href={sprite + '#icon-delete'}></use>
                          </svg>
                        </BtnDelStyled>
                      )}
                    </TableColumnStyled>
                  </TableRowStyled>
                ))}
              </tbody>
            </TableStyled>
          </ScrollWrapStyled>
          {showModal && (
            <ModalConfirm
              title="Are you sure?"
              onClose={handleClose}
              onConfirm={handleDeleTransaction}
            />
          )}
        </>
      ) : (
        <StyledWrap>
          <StyledList>
            {transaction.map(el => (
              <StyledItem key={el._id}>
                <div>
                  <StyledDescript>{el.description}</StyledDescript>
                  <StyledDate>
                    {el.date}&#160;&#160;
                    {categoryChange
                      .filter(
                        ({ value, label, trans }) => trans === el.category
                      )
                      .map(el => el.label)
                      .join()}
                  </StyledDate>
                </div>
                <StyledRight>
                  <StyledAmount data-color={transactionType}>
                    {el.amount === ''
                      ? ''
                      : transactionType === 'income'
                      ? el.amount.toFixed(2)
                      : `-${el.amount.toFixed(2)} UAH.`}
                  </StyledAmount>
                  {typeof el.amount === 'string' ? (
                    ''
                  ) : (
                    <BtnDelStyled
                      type="button"
                      onClick={() => handleOpen([el._id, transactionType])}
                    >
                      <svg>
                        <use href={sprite + '#icon-delete'}></use>
                      </svg>
                    </BtnDelStyled>
                  )}
                </StyledRight>
              </StyledItem>
            ))}
          </StyledList>
        </StyledWrap>
      )}
    </div>
  );
};

export default TransactionsList;
