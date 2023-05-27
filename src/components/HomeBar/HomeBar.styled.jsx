import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 30px;
  margin: 16px 0 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    width: 704px;
    padding-left: 38px;
    margin: 40px auto 60px auto;
  }
  @media (min-width: 1440px) {
    width: 1094px;
    margin-bottom: 10px;
  }
`;
