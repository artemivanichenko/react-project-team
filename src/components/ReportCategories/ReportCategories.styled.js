import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #383847;
  /* justify-content: center; */
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 280px;
  height: 85px;
  margin-bottom: 40px;
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
  flex-direction: row;
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
  margin-top: 6px;
  margin-bottom: 6px;
  border: 2px solid;
  border-color: green;
  border-radius: 50%;
  background-color: #56566b;
  transition: all 0.2s;
  box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  &.hover {
    /* background-color: red; */
    border: 2px solid red;
    border-color: red;
    /* border-color: green; */
    /* border-radius: 50%; */
  }
`;
export const NavLinkStyled = styled(NavLink)`
  /* display: block; */
  height: 64px;
  width: 64px;
  /* padding: 12px 0; */
  /* font-family: 'Roboto'; */
  /* font-style: normal; */
  /* font-weight: 700; */
  /* font-size: 12px; */
  /* line-height: 1.17; */
  /* letter-spacing: 0.02em; */
  /* text-transform: uppercase; */
  /* text-decoration: none; */
  /* text-align: center; */
  /* background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%); */
  /* border-top-right-radius: 20px; */
  /* border-top-left-radius: 20px; */
  /* border: none; */
  /* color: white; */
  &.hover {
    /* background-color: red; */
    border: 2px solid;
    border-color: red;
    /* border-color: green; */
    /* border-radius: 50%; */
  }
`;
export const StyledImages = styled.img`
  line-height: 0;
  margin-top: 6px;
  margin-bottom: 6px;

  margin: auto;
`;
export const StyledText = styled.p`
  color: rgba(199, 204, 220, 1);

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
