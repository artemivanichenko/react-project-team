import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 334px;
  margin: 40px auto 8px auto;
`;

export const TextStyled = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  color: #c7ccdc;
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 2px solid #80848f;
  border-radius: 16px;
  width: 125px;
  height: 44px;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #c7ccdc;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: #42a652;
    border: 2px solid #42a652;
    color: #f6f7fb;
  }
`;

export const StyledNumericFormat = styled(NumericFormat)`
  background-color: transparent;
  border: 2px solid #80848f;
  border-radius: 16px;
  width: 125px;
  height: 44px;
  color: #f6f7fb;
  text-align: end;
  box-sizing: border-box;
  padding: 12px 20px 12px 8px;
`;
