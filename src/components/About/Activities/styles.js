import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
  &:nth-child(odd) {
    .contentSec {
      padding-right: 50px;
      @media only screen and (max-width: 768px) {
        padding-right: 0px;
      }
    }
  }
  &:nth-child(even) {
    background: ${palette.BLACK_COLOR};
    .workRow {
      flex-direction: row-reverse;
    }
    .contentSec {
      padding-left: 50px;
      @media only screen and (max-width: 768px) {
        padding-left: 0px;
      }
    }
  }
`;

export const WorksList = styled.div`
  .workRow {
    align-items: center;
    max-width: 1200px;
    margin: 0px auto;
    padding: 40px 0px 25px;
    @media only screen and (min-width: 1500px) {
      max-width: 1300px;
    }
    @media only screen and (max-width: 768px) {
      .ant-col {
        min-width: 100%;
      }
    }
  }
`;

export const ContentSection = styled.div`
  max-width: 656px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
  h2 {
    font-size: 72px;
    line-height: 86px;
    font-weight: 500;
    color: ${palette.PRIMARY_TXT_COLOR};
    @media only screen and (min-width: 1200px) and (max-width: 1310px) {
      font-size: 68px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1250px) {
      font-size: 50px;
      line-height: 62px;
    }
    @media only screen and (max-width: 992px) {
      font-size: 36px;
      line-height: 47px;
    }
  }
  .description {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    opacity: 0.8;
    margin: 30px 0px;
    max-width: 540px;
    color: ${palette.SECONDARY_TXT_COLOR};
    opacity: 0.8;
    @media only screen and (max-width: 768px) {
      text-align: center;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .viewLink {
    color: ${palette.SECONDARY_TXT_COLOR};
    font-weight: normal;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    margin-top: 22px;
    border: 1px solid #888888;
    border-radius: 8px;
    padding: 12px 24px;
    &:hover, &:active, &:focus {
      color: ${palette.SECONDARY_TXT_COLOR};
    }
    span {
      width: 98px;
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
    align-items: center;
    h2 {
      text-align: center;
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
