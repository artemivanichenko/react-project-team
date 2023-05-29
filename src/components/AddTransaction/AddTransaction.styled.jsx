import DatePicker from 'react-datepicker';
import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';

export const WrapStyled = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    justify-content: center;

  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 32px;
    margin-bottom: 48px;
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    margin-bottom: 60px;
  }
`;

export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  width: 102px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin: 0 auto;
    padding-right: 7px;
    margin-bottom: 64px;
    width: 98px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 6px;
    width: 94px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0;
    width: 98px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 32px 20px;

  }
  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    width: 898px;
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  width: 170px;
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
    width: 70%;
  }

  &.react-datepicker__input-container {
    width: 70%;
  }

  & div {
    width: 70%;
  }
`;

export const InputWrapStyled = styled.div`
  display: flex;
  @media (max-width: 767px){
    flex-wrap: wrap;
    width: 280px;
    justify-content: center;
  }
 
`;

export const InputStyled = styled.input`
  width: 280px;
  height: 40px;
  padding-left: 20px;
  color: rgba(199, 204, 220, 0.5);
  background: transparent;
  border: 2px solid #474759;
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 12px;
  line-height: 1.17;

  &#shadow-root {
    color: rgba(199, 204, 220, 0.5);
  }
  &:first-of-type {
    border-top-left-radius: 16px;
  }
  &:last-of-type {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  @media (max-width: 767px){
    width: 280px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 40px;
    font-size: 12px;
    font-weight: 400;

  }

  @media screen and (min-width: 768px) {
    width: 168px;
  }
  @media screen and (min-width: 1280px) {
    width: 260px;
  }
`;

export const NumericFormatStyled = styled(NumericFormat)`
  width: 125px;
  padding-left: 10px;
  color: #c7ccdc;
  background: transparent;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border: 2px solid #474759;

  @media (max-width: 767px){
    max-width: 183px;
    border-radius: 22px;
  margin-top: 32px;
  margin-bottom: 80px;
  height: 44px;
  padding: 0px 40px;
  }
  
  @media screen and (min-width: 768px) {
    width: 116px;
  }
  @media screen and (min-width: 1280px) {
    width: 116px;
  }
`;

export const BtnContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;

export const BtnStyled = styled.button`
  width: 136px;
  height: 44px;

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
    background: #42a652;
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    border: none;
    border-radius: 16px;
  }

  &:hover {
    outline: 2px solid #c7ccdc;
    background: rgba(66, 166, 83, 0.2);
  }

  &[data-mobile] {
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
    box-shadow: none;
    border: 2px solid #474759;
    font-weight:300;
    font-size:10px;
  }
`;
