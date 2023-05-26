import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
`;

export const TableHeadRowStyled = styled.tr`
  width: 100%;
  height: 38px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  background: rgba(86, 86, 107, 0.5);
  /*  */
`;

export const TableHeadColumnStyled = styled.td`
  padding: 12px 24px;
  margin: 0;

  &:first-child {
    width: 18%;
    border-top-left-radius: 20px;
  }
  &:nth-child(2) {
    width: 26%;
  }
  &:nth-child(3) {
    width: 31%;
  }
  &:nth-child(4) {
    width: 15%;
  }
  &:last-child {
    width: 10%;
    border-top-right-radius: 20px;
  }
  &:nth-child(n + 3) {
    text-align: center;
  }
`;

export const TableRowStyled = styled.tr`
  width: 100%;
  height: 38px;
  padding: 12px 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: #c7ccdc;
`;

export const TableColumnStyled = styled.td`
  padding: 0 24px;
  margin: 0;
  border-bottom: 2px solid #474759;

  &:first-child {
    border-left: 2px solid #474759;
  }
  &:nth-child(n + 3) {
    text-align: center;
  }
  &:nth-child(4) {
    font-weight: 700;
    color: #60c470;
  }
  &:last-child {
    padding: 0;
    margin-top: 2px;
    border-right: 2px solid #474759;
  }
`;

export const BtnDelStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: rgba(86, 86, 107, 0.1);
  border-radius: 4px;

  &:hover {
    background: rgba(86, 86, 107, 0.5);
  }
`;

export const ImgDelStyled = styled.img`
  margin: 0;
  width: 15px;
  height: 18px;
`;
