import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import 'react-datepicker/dist/react-datepicker.css';

import {
  addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';
import {
  FormStyled,
  WrapStyled,
  BtnStyled,
  SelectStyled,
  DatePickerStyled,
  CalendarBox,
  InputStyled,
} from './AddTransaction.styled';
import { selectionExpenses, selectionIncome } from 'shared/category';
import { getFilterDate } from 'redux/transaction/transactionSlice';

const AddTransaction = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const expenses = params.expenses;

  const [options, setOptions] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const curDate = startDate.toISOString().split('T')[0];

  const [form, setForm] = useState({
    date: '',
    amount: 0,
    description: '',
    category: '',
  });

  useEffect(() => {
    expenses !== 'income'
      ? setOptions(selectionExpenses)
      : setOptions(selectionIncome);
  }, [expenses]);

  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'amount') value = Number(value);
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form', form, curDate);
    expenses !== 'income'
      ? dispatch(addTransactionExpense(form))
      : dispatch(addTransactionIncome(form));
    setForm('');
  };

  useEffect(() => {
    setForm(prev => ({ ...prev, date: curDate }));
    console.log('add', curDate);
    dispatch(getFilterDate(curDate));
  }, [curDate, dispatch]);

  return (
    <WrapStyled>
      <CalendarBox>
        <CalendarMonthIcon color="success" />
        <DatePickerStyled
          selected={startDate}
          onChange={date => setStartDate(date)}
          maxDate={new Date()}
          name="date"
        />
      </CalendarBox>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          name="description"
          placeholder="Product description"
          onChange={handleChange}
        />
        <SelectStyled
          options={options}
          placeholder="Product category"
          // styles={{
          //   control: (baseStyles, state) => ({
          //     ...baseStyles,
          //     border: '2px solid #474759',
          //     background: 'transparent',
          //   }),
          // }}
          name="category"
          onChange={data =>
            setForm(prev => ({ ...form, category: data.trans }))
          }
        />
        <InputStyled
          type="number"
          placeholder="0.00"
          name="amount"
          onChange={handleChange}
        />
        <BtnStyled type="submit">Input</BtnStyled>
        <BtnStyled type="reset">Clear</BtnStyled>
      </FormStyled>
    </WrapStyled>
  );
};

export default AddTransaction;
