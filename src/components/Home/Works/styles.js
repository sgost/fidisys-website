import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  @media only screen and (max-width: 768px) {
    padding: 30px;
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
    &:hover, &:active, &:focus {
      color: ${palette.HEADING_COLOR};
    }
    span {
      width: 24px;
      height: 24px;
      display: inline-flex;
      margin-left: 10px;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .viewLink {
      font-size: 14px;
      margin-top: 6px;
      span {
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
    @media only screen and (max-width: 768px) {
      .ant-col {
        min-width: 100%;
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
    .arrow {
      margin-left: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 768px) {
        width: 18px;
        height: 18px;
        margin-left: 8px !important;
      }
    }
  }
`;
