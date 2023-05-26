import DatePicker from 'react-datepicker';

import Select from 'react-select';
import styled from '@emotion/styled';

export const WrapStyled = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 32px 0 60px;
`;

export const FormStyled = styled.form`
  display: flex;
`;

export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
`;

export const DatePickerStyled = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  outline: none;
  color: #c7ccdc;

  &.react-datepicker-wrapper {
    width: 70px;
  }
`;

export const SelectStyled = styled(Select)`
  width: 170px;
  height: 46px;
  font-size: 12px;
  color: rgba(199, 204, 220, 0.5);
  background: transparent;

  &.react-select-container {
    background-color: blue;
    fill: red;
    color: black;
  }
`;

export const InputStyled = styled.input`
  height: 40px;
  color: rgba(199, 204, 220, 0.5);
  background: transparent;
  border: 2px solid #474759;;
`;

export const BtnStyled = styled.button`
  width: 136px;
  height: 44px;
  margin-left: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17x;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #ffffff;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border: 2px solid #474759;
  border-radius: 16px;

  &:first-of-type {
    margin-left: 32px;
    background: #42a652;
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    border: none;
    border-radius: 16px;
  }
`;
