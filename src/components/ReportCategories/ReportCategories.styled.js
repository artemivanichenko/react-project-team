import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 320px;
  margin: auto;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 704px;
    background-color: rgba(56, 56, 71, 0.8);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 1278px) {
    width: 1034px;
  }
`;
export const StyledButtonReport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const StyledTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #f6f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerCategory = styled.div`
  width: 280px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 20px;
  border-bottom: 1px solid #474759;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
    border-bottom: none;
  }
  @media screen and (min-width: 1278px) {
    padding-left: 222px;
    padding-right: 222px;
  }
`;
export const StyledItem = styled.li`
  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 13px;
  padding-top: 13px;
  border-bottom: 1px solid #474759;
  &:nth-last-child(-n + 3):nth-child(3n + 1),
  &:nth-last-child(-n + 3):nth-child(3n + 1) ~ li {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    border-bottom: none;
  }
`;

export const StyledWrapper = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(86, 86, 107, 0.2);
  transition: all 0.2s;
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
    border: 2px solid #42a652;
    box-shadow: 0px 0px 6px #41a350;
  }
  &:hover {
    box-shadow: 0px 0px 6px #41a350;
  }
  &.active:hover {
    box-shadow: 0px 0px 6px #41a350;
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
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: rgba(199, 204, 220, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 64px;
  text-align: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 12px;
  }
`;
