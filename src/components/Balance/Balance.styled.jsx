import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';
import Tooltip from '@mui/material/Tooltip';

export const TooltipStyled = styled(({ className, ...other }) => (
  <Tooltip classes={{ tooltip: className }} {...other} />
))`
  @media (min-width: 320px) {
    width: 268px;
    height: 156px;
    padding: 24px 32px;
    border-radius: 30px;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #ffffff;
    background: linear-gradient(118.06deg, #58bb67 3.05%, #368342 125.62%);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const FormStyled = styled.form`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    width: 334px;
  }
  @media (min-width: 1440px) {
    margin: 0 auto 0 auto;
  }
`;

export const TextStyled = styled.p`
  @media (min-width: 320px) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.02em;
    color: #c7ccdc;
  }
`;

export const BoxStyled = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const StyledNumericFormat = styled(NumericFormat)`
  @media (min-width: 320px) {
    width: 140px;
    height: 44px;
    box-sizing: border-box;
    padding: 0 16px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.16;
    text-align: end;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #f6f7fb;
    background-color: transparent;
    border: 2px solid #80848f;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  @media (min-width: 768px) {
    width: 125px;
    height: 44px;
    padding: 12px 20px 12px 8px;
    border-radius: 16px;
  }
`;

export const ButtonStyled = styled.button`
  @media (min-width: 320px) {
    background-color: transparent;
    border: 2px solid #80848f;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 140px;
    height: 44px;
    padding: 0 16px;

    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: start;
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
  }
  @media (min-width: 768px) {
    width: 125px;
    height: 44px;
    border-radius: 16px;
    text-align: center;
  }
`;
