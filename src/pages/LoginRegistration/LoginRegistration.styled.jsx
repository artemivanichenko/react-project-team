import styled from "@emotion/styled";

export const FormWrapper = styled.div `

    @media screen and (min-width: 1280px) {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 150px;
    }

     @media screen and (min-width: 320px) and (max-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const Image = styled.img`
  position: relative;
  width: 675px;
  height: 544px;
   @media screen and (max-width: 1279px) {
      display: none;
   }
`;