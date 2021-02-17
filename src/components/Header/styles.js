import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const HeaderContainer = styled.header`
  z-index: 20;
  background: ${palette.BLACK_COLOR};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 100px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 18px 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 18px 80px;
  }
  @media (max-width: 768px) {
    padding: 18px 0px;
    flex-direction: column;
    justify-content: center;
  }
  .navMenu {
    margin-left: auto;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  a {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: ${palette.WHITE_COLOR};
    display: flex;
    align-items: center;
    img {
      width: 97px;
      height: 32px;
      margin-right: 5px;
      object-fit: contain;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 0px 0px 30px;
    width: 100%;
    a {
      display: inline-flex;
      img {
        width: 73px;
        height: 24px;
      }
    }
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    .ant-btn {
      margin: 5px 0px 20px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-right: 25px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const NavLink = styled.li`
  margin: 0px 25px;
  @media (max-width: 992px) {
    margin: 0px 8px;
  }
  a {
    display: inline-block;
    padding: 6px 0px;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: ${palette.SECONDARY_TXT_COLOR};
    position: relative;
    text-transform: uppercase;
    &:hover {
      color: ${palette.HEADING_COLOR};
    }
  }
  .activeLink {
    color: ${palette.HEADING_COLOR};
    font-weight: bold;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${palette.HEADING_COLOR};
      bottom: 0;
      left: 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flex;
    padding: 9px 0px;
    a {
      display: inline-block;
      padding: 5px 0px;
      text-align: center;
      font-size: 36px;
      line-height: 47px;
      text-transform: capitalize;
      &:hover {
        color: ${palette.HEADING_COLOR};
      }
    }
  }
`;

export const ResNavMenu = styled.div`

`;

export const MenuIcon = styled.div`
  display: none;
  position: absolute;
  right: 30px;
  top: 20px;
  right: 30px;
  font-size: 20px;
  @media (max-width: 768px) {
    display: block;
    top: 30px;
    span {
      cursor: pointer;
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const IntouchMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 25px;
  @media only screen and (max-width: 768px) {
    margin: 80px 0px;
    justify-content: center;
    .media-link {
      opacity: 1 !important;
      font-size: 24px;
      margin: 0px 15px;
    }
  }
  .media-link {
    max-width: 24px;
    margin: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 1;
    }
  }
`;
