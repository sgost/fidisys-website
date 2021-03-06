import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
  .serviceRow {
    max-width: 1050px;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const SectionHeader = styled.div`
  max-width: 545px;
  margin: 0 auto;
  padding: 50px 0px;
  h2, p {
    text-align: center;
  }
  p {
    margin-top: 12px;
  }
`;

export const ContentSection = styled.div`
  max-width: 550px;
  margin: 0 auto;
  h2 {
    font-size: 48px;
    line-height: 62px;
    color: ${palette.HEADING_COLOR};
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      font-size: 36px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 31px;
    }
  }
  .description {
    margin: 16px 0px;
    display: inline-block;
  }
  .viewLink {
    letter-spacing: 0.05em;
    color: ${palette.HEADING_COLOR};
    font-weight: 500;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    margin-top: 22px;
    .text {
      transition: 250ms;
      position: relative;
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
    }
    
    &:hover {
      .text::after {
        transform: scaleX(1);
        transform-origin: left;
      }
      .arrow {
        margin-left: 14px;
      }
    }
    &:hover, &:active, &:focus {
      color: ${palette.HEADING_COLOR};
    }
    .arrow {
      width: 24px;
      height: 24px;
      display: inline-flex;
      margin-left: 10px;
      align-items: center;
      justify-content: center;
      transition: margin 0.5s ease-in-out;
    }
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .viewLink {
      font-size: 14px;
      margin-top: 6px;
      .arrow {
        width: 20px;
        height: 20px;
        margin-left: 8px;
      }
    }
  }
`;

export const WorksList = styled.div`
  .workRow {
    align-items: center;
    max-width: 1100px;
    margin: 0px auto;
    padding: 40px 0px 25px;
    &:nth-child(odd) {
      .contentSec {
        padding-left: 50px;
        @media only screen and (max-width: 768px) {
          padding-left: 0px;
        }
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      .contentSec {
        padding-right: 50px;
        @media only screen and (max-width: 768px) {
          padding-right: 0px;
        }
      }
    }
    .mobView {
      display: none;
    }
    @media only screen and (max-width: 768px) {
      padding: 40px 30px 60px;
      .ant-col {
        min-width: 100%;
      }
      &:nth-child(odd) {
        background: ${palette.SECONDARY_SECTION_BACKGROUND};
      }
      &:nth-child(even) {
        background: ${palette.BLACK_COLOR};
      }
      .mobView {
        margin: 0px;
        padding: 60px 0px 0px;
      }
      &:last-child {
        .mobView {
          display: flex;
        }
      }
    }
  }
`;

export const ImageSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    max-width: 500px;
    display: inline-block;
  }
`;

export const AllworksBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px 40px;
  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .btnCont {
      max-width: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${palette.WHITE_COLOR} !important;
      padding: 15px 25px;
      &:hover, &:active, &:focus {
        color: ${palette.WHITE_COLOR} !important;
      }
      &:hover {
        border-color: ${palette.BUTTON_PRIMARY};
        .btn-bg {
          width: 282%;
          height: ${133*2.25}%;
        }
      }
      .btn-bg {
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 0%;
        height: 0%;
        background-color: ${palette.BLACK_COLOR};
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
    .arrow {
      margin-left: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: margin 0.5s ease-in-out;
      @media only screen and (max-width: 768px) {
        width: 18px;
        height: 18px;
        margin-left: 8px !important;
      }
    }
    &:hover {
      .arrow {
        margin-left: 18px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
