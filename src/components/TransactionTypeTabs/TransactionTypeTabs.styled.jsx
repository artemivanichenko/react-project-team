import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const TabStyled = styled(Tab)`

`;

export const TabsStyled = styled(Tabs)``;

export const TabListStyled = styled(TabList)``;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  width: 138px;
  padding: 12px 0;
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
  border: none;
  color: #f6f7fb;

  &.active {
    background: #383847;
  }
  &:first-of-type {
    color: #60c470;
  }
`;

export const WrapStyled =styled.div`
    display: flex;
`
