import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';
import { FormStyled, WrapStyled } from './AddTransaction.styled';



const AddTransaction = () => {
  const [startDate, setStartDate] = useState();

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

  return (
    <WrapStyled>
      <DatePicker
          showIcon
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
      <FormStyled>
        {/* <input type="date" name="date" /> */}
        
        <input type="text" name="text" />
        <Select options={options} styles={{width: '170px'}}/>
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
        <input type="number" placeholder="0.00" />
        <button type="submit">Input</button>
        <button type="reset">Clear</button>
      </FormStyled>
    </WrapStyled>
  );
};

export default AddTransaction;
