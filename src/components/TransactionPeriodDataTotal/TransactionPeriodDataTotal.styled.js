import styled from 'styled-components';
export const StyledSection = styled.section`
  width: 1034px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const StyledBox = styled.div`
  display: flex;
  background-color: rgba(56, 56, 71, 0.8);
  justify-content: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 280px;
  height: 85px;
  margin-bottom: 32px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 768px) {
    width: 1034px;
    height: 50px;
  }
`;

export const StyledTotalAmount = styled.span`
  margin-left: 10px;
  font-weight: 700;
  line-height: calc(24 / 16);
  color: ${p => (p.red ? '#FE4566' : '#60C470')};
`;

export const StyledText = styled.p`
  color: rgba(199, 204, 220, 1);
  font-weight: 700;
  border-left: 3px solid #474759;
  margin-left: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:first-child {
    border-left: none;
    padding-left: 0;
    margin-left: 0;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
