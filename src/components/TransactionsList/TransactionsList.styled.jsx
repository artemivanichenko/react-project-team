import { HandySvg } from 'handy-svg';
import styled from 'styled-components';

export const ScrollWrapStyled = styled.div`
max-width: 58.3vw;
  max-height: 360px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: block;
    height: 82px;
    width: 6px;
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #60c470;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
    margin-bottom: 2px;
  }
  &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
    margin-top: 2px;
  }
`;

export const TableStyled = styled.table`
  width: 58.3vw;
  table-layout: auto;
  border-spacing: 0;
`;

export const TableHeadRowStyled = styled.tr`
  min-width: 746px;
  height: 38px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  background: rgba(86, 86, 107, 0.5);
`;

export const TableHeadColumnStyled = styled.td`
  padding: 12px 24px;
  margin: 0;

  &:first-child {
    /* width: 20%; */
    border-top-left-radius: 20px;
  }
  &:nth-child(2) {
    /* width: 30%; */
  }
  &:nth-child(3) {
    /* width: 25%; */
  }
  &:nth-child(4) {
    /* width: 20%; */
  }
  &:last-child {
    /* width: 5%; */
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
    color: #fe4566;
  }
  &[data-color='income'] {
    color: #60c470;
  }
  &:last-child {
    padding: 4px;
    /* margin-top: 2px; */
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

export const SvgStyled = styled(HandySvg)`
  fill: rgba(199, 204, 220, 0.5);

  &:hover {
    fill: #f6f7fb;
  }
`;
