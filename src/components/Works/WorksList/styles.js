import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  background: ${palette.BLACK_COLOR};
  padding: 60px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 40px 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 0px;
  }
  .worksListContainer {
    max-width: 1200px;
    margin: 0 auto;
    @media only screen and (min-width: 1500px) {
      max-width: 1300px;
    }
    .workCol {
      padding: 25px;
      @media (max-width: 768px) {
        padding: 25px 0px;
        &:nth-child(2) {
          margin-top: 0% !important;
        }
        &:nth-child(odd) {
          margin-top: 0% !important;
        }
      }
      @media only screen and (min-width: 768px) and (max-width: 992px) {
        padding: 25px 15px;
      }
      &:first-child {
        margin-top: 0% !important;
      }
      &:nth-child(2) {
        margin-top: 8%;
      }
      &:nth-child(odd) {
        margin-top: -8%;
      }
    }
  }
`;

export const WorkItem = styled.div`
  height: 100%;
  overflow: hidden;
  max-width: 573px;
  cursor: pointer;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  background: ${props => props.bg && props.bg};
  width: 100%;
  height: 430px;
  img {
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 768px) {
    height: 309px;
  }
`;

export const WorkDescription = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    margin: 22px 16px;
  }
  h3 {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.03em;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  p {
    letter-spacing: 0.03em;
    opacity: 0.8;
    margin-top: 10px;
  }
`;

export const TagsList = styled.div`
  margin-top: 16px;
`;

export const TagItem = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.03em;
  color: ${props => props.color && props.color};
  opacity: 0.8;
  background: ${props => props.background && props.background};
  border-radius: 16px;
  padding: 0px 20px;
  display: inline-block;
  text-align: center;
  margin-right: 16px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 50px;
  padding-left: 25px;
  .filterBtn {
    border: none;
    background: none !important;
    border-bottom: 1px solid ${palette.WHITE_COLOR} !important;
    border-radius: 0px !important;
    width: 372px;
    display: flex;
    align-items: center;
    height: 62px !important;
    min-height: 62px !important;
    padding: 0px !important;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px !important;
    text-transform: capitalize;
    position: relative;
    color: ${palette.HEADING_COLOR};
    &:hover, &:active, &:focus {
      border: none;
      background: none !important;
      border-bottom: 1px solid ${palette.WHITE_COLOR} !important;
      border-radius: 0px !important;
      color: ${palette.HEADING_COLOR} !important;
    }
    .downArrow {
      margin-top: -20px;
      width: 36px;
      height: 36px;
      position: absolute;
      right: 0px;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 20px 20px 0px;
  }
  @media only screen and (min-width: 1500px) {
    max-width: 1300px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 15px;
  }
  @media (max-width: 768px) {
    .filterBtn {
      width: 290px !important;
      font-size: 36px !important;
      line-height: 47px !important;
      height: 47px !important;
      min-height: 47px !important;
      .downArrow {
        margin-top: -14px;
        width: 28px;
        height: 28px;
      }
    }
    .selLabel {
      font-size: 12px;
      line-height: 16px;
    }
    .ant-select {
      width: 290px !important;
    }
    .ant-select-selector {
      width: 290px !important;
      font-size: 36px !important;
      line-height: 47px !important;
      height: 47px !important;
      min-height: 47px !important;
      .ant-select-selection-search-input {
        height: 47px !important;
      }
      .ant-select-selection-item {
        line-height: 47px !important;
      }
    }
    .ant-select-arrow {
      margin-top: -14px;
      width: 28px;
      height: 28px;
    }
  }
  .selLabel {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: ${palette.SECONDARY_TXT_COLOR};
    display: block;
  }
  .ant-select-selector {
    background-color: transparent !important;
    border-bottom: 1px solid ${palette.WHITE_COLOR} !important;
    border-top: 0px !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-radius: 0px !important;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px !important;
    color: ${palette.HEADING_COLOR} !important;
    height: 62px !important;
    min-height: 62px !important;
    padding: 0px !important;
    box-shadow: none !important;
    .ant-select-selection-search-input {
      height: 62px !important;
    }
    .ant-select-selection-item {
      line-height: 62px !important;
    }
  }
  .ant-select-arrow {
    margin-top: -20px;
    width: 36px;
    height: 36px;
    right: 0px !important;
  }
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-right: 0px;
  padding: 100px 0px 0px 100px;
  @media only screen and (max-width: 768px) {
    padding: 40px 0px 0px;
  }
`;

export const NavLink = styled.li`
  width: 100%;
  text-align: center;
  display: flex;
  padding: 9px 0px;
  a, .contactLink {
    display: inline-block;
    padding: 5px 0px;
    font-weight: normal;
    font-size: 36px;
    line-height: 47px;
    color: ${palette.SECONDARY_TXT_COLOR};
    position: relative;
    text-transform: capitalize;
    cursor: pointer;
    text-align: center;
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
`;
