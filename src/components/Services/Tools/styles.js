import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px 0;
  background: ${palette.BLACK_COLOR};
  .toolsCont {
    padding: 50px 0px;
  }
  .toolsList {
    width: 100% !important;
    .ant-col {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 30px;
    .toolsList {
      max-width: 600px !important;
      .ant-col {
        min-width: 50%;
      }
    }
  }
  .toolsList {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const SectionHeader = styled.div`
  max-width: 660px;
  margin: 0 auto;
  padding: 50px 0px 70px;
  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    color: ${palette.HEADING_COLOR};
  }
  p {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0px 30px;
    h2 {
      font-size: 36px !important;
      line-height: 47px !important;
    }
    p {
      font-size: 12px !important;
      line-height: 16px !important;
    }
  }
`;

export const ToolsListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
  h3 {
    font-size: 1.5vw !important;
  }
  @media only screen and (max-width: 768px) {
    padding: 16px 0px;
    margin: 0px;
    span {
      width: 43px !important;
      height: 43px !important;
    }
    h3 {
      font-size: 14px !important;
      line-height: 18px !important;
    }
  }
  span {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    text-align: center;
    margin-top: 3px;
    font-size: 22px;
    line-height: 28px;
    font-weight: normal;
    color: #B1C0D6;
    opacity: 0.8;
  }
`;