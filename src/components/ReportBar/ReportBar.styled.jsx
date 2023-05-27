import styled from '@emotion/styled';

export const Conteiner = styled.div`
@media (min-width: 320px) {
    max-width:480px;
 display: flex;
align-items: center;
justify-content: space-between;
padding: 40px 20px;
flex-direction: column;
gap:32px;
margin: auto;
}
@media (min-width: 768px) {
     min-width: 768px;
     margin:auto;
        flex-direction: row;
    display: flex;
align-items: center;
justify-content: space-between;
    padding: 40px 32px;
}
@media (min-width: 1280px) {
    width: 1280px;
     margin:auto;
    padding: 40px 123px;
}

padding: 40px 123px;
`
export const CurrentMob = styled.div`
@media (min-width: 320px) {
    display: flex;
    flex-direction: column-reverse;
    gap:32px;
}
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 62px;}
   @media (min-width: 1280px) {
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    
   } `