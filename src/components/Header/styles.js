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
  .contactBtn {
    padding: 0px !important;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:hover, &:active, &:focus {
      background-color: transparent !important;
    }
    .btnCont {
      max-width: 100%;
      width: 100%;
      display: block;
      color: ${palette.WHITE_COLOR} !important;
      padding: 12px 24px;
      &:hover, &:active, &:focus {
        color: ${palette.WHITE_COLOR} !important;
      }
      &:hover {
        .btn-bg {
          width: 225%;
          height: ${133*2.25}%;
        }
      }
      .btn-bg {
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 0%;
        height: 0%;
        background-color: ${palette.BUTTON_PRIMARY};
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
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
    margin-right: 0px;
  }
`;

export const NavLink = styled.li`
  margin: 0px 25px;
  @media (max-width: 992px) {
    margin: 0px 8px;
  }
  a, .contactLink {
    display: inline-block;
    padding: 6px 0px;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: ${palette.SECONDARY_TXT_COLOR};
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    transition: 250ms;
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      top: 100%;
      left: 0;
      background: ${palette.HEADING_COLOR};
      transition: transform 250ms ease-in-out;
      transform: scaleX(0);
      transform-origin: right;
    }
    &:hover {
      color: ${palette.HEADING_COLOR} !important;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
  .activeLink {
    color: ${palette.HEADING_COLOR} !important;
    font-weight: bold;
    border-bottom: 2px solid ${palette.HEADING_COLOR};
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flex;
    padding: 9px 0px;
    a, .contactLink {
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
    margin: 20px 8px 70px;
    .media-link {
      opacity: 1 !important;
      font-size: 24px;
      max-width: 20px !important;
      margin: 0px 8px !important;
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
