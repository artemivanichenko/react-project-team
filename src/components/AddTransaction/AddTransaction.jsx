import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import {
  addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';
import {
  FormStyled,
  WrapStyled,
  BtnStyled,
  DatePickerStyled,
  CalendarBox,
  InputStyled,
  BtnContainerStyled,
  InputWrapStyled,
  NumericFormatStyled,
} from './AddTransaction.styled';
import { selectionExpenses, selectionIncome } from 'shared/category';
import { getFilterDate } from 'redux/transaction/transactionSlice';
import { objectStyle } from './AddTransactionStyle';
import { selectBalance } from 'redux/transaction/transactionSelectors';
import { useMediaQuery } from 'react-responsive';
import Modal from 'components/Modal/Modal';

const AddTransaction = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const expenses = params.transactionType;

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  registerLocale('uk', uk);
  const [startDate, setStartDate] = useState(new Date());
  const curDate = startDate.toISOString().split('T')[0];

  const paramsBalance = useSelector(selectBalance);
  const balance = expenses === 'income' ? 1000000 : paramsBalance;

  const [form, setForm] = useState({
    date: '',
    amount: '',
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
    expenses !== 'income'
      ? dispatch(addTransactionExpense(form))
      : dispatch(addTransactionIncome(form));
    handleClickReset();
    setForm({ description: '', amount: '', category: '', date: curDate });
    setSelected(null);
  };

  const handleClickReset = () => {
    setForm(prev => ({ ...prev, amount: '', category: '', description: '' }));
    setSelected(null);
  };

  useEffect(() => {
    setForm(prev => ({ ...prev, date: curDate }));
    dispatch(getFilterDate(curDate));
  }, [curDate, dispatch]);

  useEffect(() => {
    dispatch(getFilterDate(''));
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const tableMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <WrapStyled>
      {tableMobile && !isModalOpen && (
        <BtnStyled data-mobile type="button" onClick={() => toggleModal()}>
          Add transaction
        </BtnStyled>
      )}
      {!isModalOpen && (
        <CalendarBox>
          <CalendarMonthIcon color="success" />
          <DatePickerStyled
            required
            locale="uk"
            selected={startDate}
            onChange={date => setStartDate(date)}
            maxDate={new Date()}
            name="date"
          />
        </CalendarBox>
      )}

      {!tableMobile && (
        <FormStyled onSubmit={handleSubmit}>
          <InputWrapStyled>
            <InputStyled
              required
              value={form.description}
              type="text"
              name="description"
              placeholder="Product description"
              onChange={handleChange}
            />

            <Select
              required
              options={options}
              placeholder="Product category"
              value={selected}
              styles={objectStyle}
              name="category"
              onChange={data => {
                setForm(prev => ({ ...form, category: data.trans }));
                setSelected(data);
              }}
            />

            <NumericFormatStyled
              required
              placeholder="0.00 UAH"
              value={form.amount}
              allowNegative={false}
              decimalScale={2}
              allowedDecimalSeparators={['.']}
              allowLeadingZeros={false}
              thousandSeparator=" "
              suffix=" UAH"
              displayType="input"
              isAllowed={values => {
                const { floatValue } = values;
                return floatValue < balance && floatValue >= 1;
              }}
              onValueChange={({ floatValue }, sourceInfo) => {
                setForm(prev => ({ ...prev, amount: floatValue }));
              }}
            />
          </InputWrapStyled>
          <BtnContainerStyled>
            <BtnStyled type="submit">Input</BtnStyled>
            <BtnStyled type="reset" onClick={handleClickReset}>
              Clear
            </BtnStyled>
          </BtnContainerStyled>
        </FormStyled>
      )}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <FormStyled onSubmit={handleSubmit}>
            <InputWrapStyled>
              <InputStyled
                type="text"
                name="description"
                placeholder="Product description"
                onChange={handleChange}
              />

              <Select
                options={options}
                placeholder="Product category"
                value={selected}
                styles={objectStyle}
                name="category"
                onChange={data => {
                  setForm(prev => ({ ...form, category: data.trans }));
                  setSelected(data);
                }}
              />

              <NumericFormatStyled
                placeholder="0.00 UAH"
                value={form.amount}
                allowNegative={false}
                decimalScale={2}
                allowedDecimalSeparators={['.']}
                allowLeadingZeros={false}
                thousandSeparator=" "
                suffix=" UAH"
                displayType="input"
                isAllowed={values => {
                  const { floatValue } = values;
                  return floatValue < balance && floatValue >= 1;
                }}
                onValueChange={({ floatValue }, sourceInfo) => {
                  setForm(prev => ({ ...prev, amount: floatValue }));
                }}
              />
            </InputWrapStyled>
            <BtnContainerStyled>
              <BtnStyled type="submit">Input</BtnStyled>
              <BtnStyled type="reset" onClick={handleClickReset}>
                Clear
              </BtnStyled>
            </BtnContainerStyled>
          </FormStyled>
        </Modal>
      )}
    </WrapStyled>
  );
};

export default AddTransaction;
