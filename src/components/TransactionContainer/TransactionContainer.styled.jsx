import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 767px){
    width: 280x;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 1098px;
  }
`;

export const ContainerStyled = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 0px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background: transparent;
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 42px 40px;
    border-radius: 0px 30px 30px 30px;
  }
  @media screen and (min-width: 1280px) {
    padding: 32px 32px 40px 32px;
  }
`;

export const BoxStyled = styled.div`
  display: flex;

@media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap:40px;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  
  
`;
