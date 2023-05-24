import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { FormStyled, WrapStyled } from './AddTransaction.styled';
import { BtnStyled } from './AddTransaction.styled';
import { SelectStyled } from './AddTransaction.styled';
import { DatePickerStyled } from './AddTransaction.styled';

const AddTransaction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const curDate = startDate.toISOString().split('T')[0];

  const [form, setForm] = useState({
    date: '',
    amount: 0,
    description: '',
    category: '',
  });

  const options = [
    { value: 'products', label: 'Products' },
    { value: 'alcohol', label: 'Alcohol' },
    { value: 'entertainment', label: 'Entertain' },
    { value: 'health', label: 'Health' },
    { value: 'transport', label: 'Transport' },
    { value: 'housing', label: 'Housing' },
    { value: 'hobbies', label: 'Sports, hobbies' },
    { value: 'technique', label: 'Technique' },
    { value: 'communal', label: 'Communal, communication' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = e => {
    let { name, value } = e.target;
    setStartDate(startDate);
    if (name === 'amount') value = Number(value);
    setForm(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setForm(prev => ({ ...prev, date: curDate }));
  }, [curDate]);

  console.log('name', form, startDate);
  return (
    <WrapStyled>
      <DatePickerStyled
        showIcon
        selected={startDate}
        onChange={date => setStartDate(date)}
        name="data"
      />
      <FormStyled>
        {/* <input type="date" name="date" /> */}
        <input
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
          onInputChange={handleChange}
        />
        {/* <select name="categories">
          <option value="products">Products</option>
          <option value="alcohol">Alcohol</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="transport">Transport</option>
          <option value="housing">Housing</option>
          <option value="hobbies">Sports, hobbies</option>
          <option value="technique">Technique</option>
          <option value="communal">Communal, communication</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select> */}
        <input
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
