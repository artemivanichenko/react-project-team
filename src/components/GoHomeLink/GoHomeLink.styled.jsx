import styled from '@emotion/styled';

export const HomeText = styled.span`
@media (min-width: 320px) {
   display:none;   
}
@media (min-width: 768px)
 {
    display:block;
color:white;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height:1.1666;
letter-spacing: 0.04em;
 }

a{
   text-decoration: none; 
}
`
export const Transaction = styled.span`
@media (min-width: 320px) {
    display:block;
    margin-right:150px;
font-weight: 700;
font-size: 10px;
line-height: 1.22px;
letter-spacing: 0.02em;
text-transform: uppercase;
color:white;

}
@media (min-width: 768px) {
  display:none;  
}`