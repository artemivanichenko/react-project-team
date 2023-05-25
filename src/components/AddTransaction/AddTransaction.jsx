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

const AddTransaction = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const expenses = params.expenses;

  const [startDate, setStartDate] = useState(new Date());
  const curDate = startDate.toISOString().split('T')[0];

  const [form, setForm] = useState({
    date: '',
    amount: 0,
    description: '',
    category: '',
  });

  const options = [
    { value: 'products', label: 'Products', trans: 'Продукты' },
    { value: 'alcohol', label: 'Alcohol', trans: 'Алкоголь' },
    { value: 'entertainment', label: 'Entertain', trans: 'Развлечения' },
    { value: 'health', label: 'Health', trans: 'Здоровье' },
    { value: 'transport', label: 'Transport', trans: 'Транспорт' },
    { value: 'housing', label: 'Housing', trans: 'Всё для дома' },
    { value: 'hobbies', label: 'Sports, hobbies', trans: 'Спорт и хобби' },
    { value: 'technique', label: 'Technique', trans: 'Техника' },
    {
      value: 'communal',
      label: 'Communal, communication',
      trans: 'Коммуналка и связь',
    },
    { value: 'education', label: 'Education', trans: 'Образование' },
    { value: 'other', label: 'Other', trans: 'Прочее' },
  ];

  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'amount') value = Number(value);
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    expenses !== 'income'
      ? dispatch(addTransactionExpense(form))
      : dispatch(addTransactionIncome(form));
    setForm('');
  };

  useEffect(() => {
    setForm(prev => ({ ...prev, date: curDate }));
  }, [curDate]);

  return (
    <WrapStyled>
      <CalendarBox>
        <CalendarMonthIcon color="success" />
        <DatePickerStyled
          selected={startDate}
          onChange={date => setStartDate(date)}
          maxDate={new Date()}
          name="data"
        />
      </CalendarBox>
      <FormStyled>
        <InputStyled
          type="text"
          name="description"
          placeholder="Product description"
          onChange={handleChange}
        />
        <SelectStyled
          options={options}
          placeholder="Product category"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: '2px solid #474759',
              background: 'transparent',
            }),
          }}
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
        <BtnStyled type="button" onClick={handleSubmit}>
          Input
        </BtnStyled>
        <BtnStyled type="reset">Clear</BtnStyled>
      </FormStyled>
    </WrapStyled>
  );
};

export default AddTransaction;
