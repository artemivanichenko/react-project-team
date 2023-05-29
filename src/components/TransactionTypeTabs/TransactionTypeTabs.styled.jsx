import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Tabs, TabList } from 'react-tabs';

export const NavLinkStyled = styled(NavLink)`
  display: block;
  width: 138px;
  padding: 13px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: #f6f7fb;
  &:last-of-type {
    margin: -1px;
  }

  &.active {
    background: #383847;
    color: #60c470;
  }
  @media screen and (max-width: 767px) {
/* width: 50vw; */
width: 50vw;

padding: 20px 0;
 &.active {
  border: 1px  solid #60C470
  /* box-shadow: 0px 0px 6px #41A350; */
 }

}

`;

export const WrapStyled = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const mobileTab = styled(NavLink)`
  position: fixed;
  bottom: 0%;
  display: block;
  width: 138px;
  padding: 13px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: #f6f7fb;
  @media screen and (max-width: 767px) {
  position: fixed;bottom: 0;
width: 50vw;

}

  &:last-of-type {
    margin: -1px;
  }
`;

export const TabsStyled = styled(Tabs)`

@media screen and (max-width: 767px) {
  position: fixed;bottom: 0;
 max-width: 100vw;

}

`

export const TabsListStyled = styled(TabList)`
display: flex;
flex-wrap: nowrap;
max-width: 100vw;
`