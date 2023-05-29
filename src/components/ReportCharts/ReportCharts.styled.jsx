import styled from '@emotion/styled';

export const ChartWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 10px 0 0;

    background: none;
    box-shadow: none;
    border-radius: none;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 422px;
    padding: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 1034px;
    height: 422px;
    padding: 20px 140px;
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }
`;
