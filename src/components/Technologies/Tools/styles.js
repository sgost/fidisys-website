import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${palette.BLACK_COLOR};
  @media only screen and (max-width: 768px) {
    padding: 30px;
    .toolsList {
      padding: 0px 0px 30px !important;
      max-width: 600px !important;
      .ant-col {
        min-width: 33%;
      }
    }
  }
  .toolsList {
    max-width: 1050px;
    margin: 0 auto;
    padding: 20px 0px 30px;
    justify-content: center;
  }
`;

export const SectionHeader = styled.div`
  max-width: 545px;
  margin: 0 auto;
  padding: 50px 0px;
  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    color: ${palette.HEADING_COLOR};
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 36px !important;
      line-height: 47px !important;
    }
  }
`;

export const ToolsListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
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
