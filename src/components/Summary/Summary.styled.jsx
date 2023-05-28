import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
  width: 213px;
  height: 280px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: rgba(86, 86, 107, 0.5);
`;

export const TextStyled = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding: 12px 0;
  width: 100%;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
`;

export const DivStyled = styled.div`
  width: 100%;
  height: 242px;
  overflow: hidden auto;
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

export const ListStyled = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c7ccdc;
  border-bottom: 2px solid #383847;

  &:first-of-type {
    border-top: 4px solid #383847;
  }
`;

export const MonthStyled = styled.span`
  padding-left: 12px;
`;

export const SumStyled = styled.span`
  padding-right: 12px;
`;
