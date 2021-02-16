import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 120px 60px;
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  position: relative;
  z-index: 1;
  .rowCont {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 30px;
    .ant-col {
      min-width: 100%;
      padding: 20px 0px;
    }
  }
  .leftWhiteSq {
    width: 8px;
    height: 8px;
    background: ${palette.WHITE_COLOR};
    display: inline-block;
    position: absolute;
    top: 20%;
    left: 6%;
    z-index: -1;
  }
  .leftYellowRect {
    width: 4px;
    height: 17px;
    background: ${palette.YELLOW};
    display: inline-block;
    position: absolute;
    bottom: 33%;
    left: 4%;
    z-index: -1;
  }
  .leftBlueCir {
    width: 8px;
    height: 8px;
    background: ${palette.HEADING_COLOR};
    display: inline-block;
    position: absolute;
    bottom: 22%;
    left: 2%;
    z-index: -1;
    border-radius: 100%;
  }
  .leftRedSq {
    width: 8px;
    height: 8px;
    background: ${palette.RED_ORANGE};
    display: inline-block;
    position: absolute;
    bottom: 20%;
    left: 8%;
    z-index: -1;
  }
  .rightWhiteSq {
    width: 8px;
    height: 8px;
    background: ${palette.WHITE_COLOR};
    display: inline-block;
    position: absolute;
    top: 30%;
    right: 5%;
    z-index: -1;
  }
  .rightRedCir {
    width: 8px;
    height: 8px;
    background: ${palette.RED_ORANGE};
    display: inline-block;
    position: absolute;
    bottom: 28%;
    right: 8%;
    z-index: -1;
    border-radius: 100%;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    color: ${palette.HEADING_COLOR};
    margin-bottom: 22px;
  }
  span {
    width: 392px;
    display: inline-block;
    @media only screen and (max-width: 576px) {
      width: 320px;
    }
  }
`;

export const ContentCont = styled.div`
  width: 395px;
  margin: 0 auto;
  padding: 0px 30px;
  color: ${palette.SECONDARY_TXT_COLOR};
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  opacity: 0.8;
  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    opacity: 0.8;
  }
  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`;
