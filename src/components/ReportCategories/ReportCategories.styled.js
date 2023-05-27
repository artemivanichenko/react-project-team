import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 1034px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(56, 56, 71, 0.8);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 280px;
  height: 85px;
  margin-bottom: 40px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  @media screen and (min-width: 768px) {
    width: 1034px;
    height: 346px;
  }
`;
export const StyledButtonReport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 222px;
  padding-right: 222px;
  justify-content: center;
  gap: 40px;
  margin-top: 24px;
  margin-bottom: 20px;
`;
export const StyledWrapper = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 6px;
  margin-bottom: 6px; */

  border-radius: 50%;
  background-color: rgba(86, 86, 107, 0.2);
  transition: all 0.2s;

  /* &:hover {
    box-shadow: 0 7px 30px rgb(65 132 144 / 50%), 0 3px 16px rgb(0 0 0 / 50%);
  } */
`;
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 6px;
  margin-bottom: 6px;
  height: 64px;
  width: 64px;
  box-sizing: border-box;
  &.active {
    border: 1px solid #42a652;
    box-shadow: 0px 0px 6px #41a350;
  }
  &:hover {
    box-shadow: 0 7px 30px rgb(65 132 144 / 50%), 0 3px 16px rgb(0 0 0 / 50%);
  }
  &.active:hover {
    box-shadow: none;
  }
`;
export const StyledImages = styled.img`
  line-height: 0;
  margin-top: 6px;
  margin-bottom: 6px;
  margin: auto;
`;
export const StyledText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: rgba(199, 204, 220, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledTitle = styled.h2`
  font-family: 'Roboto';
  font-style: 'bolt';
  /* font-weight: 700; */
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #f6f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
  }
`;
