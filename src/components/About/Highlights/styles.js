import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${palette.BLACK_COLOR};
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
  .leftWhiteTri {
    width: 0;
    height: 0;
    border-top: 6px solid ${palette.BLACK_COLOR};
    border-left: 6px solid ${palette.WHITE_COLOR};
    border-bottom: 6px solid ${palette.BLACK_COLOR};
    background: ${palette.WHITE_COLOR};
    display: inline-block;
    position: absolute;
    bottom: 38%;
    left: 6%;
    z-index: -1;
  }
  .leftYellowRect {
    width: 4px;
    height: 17px;
    background: ${palette.YELLOW};
    display: inline-block;
    position: absolute;
    bottom: 15%;
    left: 4%;
    z-index: -1;
  }
  .leftBlueCir {
    width: 8px;
    height: 8px;
    background: ${palette.HEADING_COLOR};
    display: inline-block;
    position: absolute;
    bottom: 10%;
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
    bottom: 9%;
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
    top: 35%;
    right: 8%;
    z-index: -1;
    border-radius: 100%;
  }
  .rightYellowTri {
    width: 0;
    height: 0;
    border-top: 6px solid ${palette.BLACK_COLOR};
    border-left: 6px solid ${palette.YELLOW};
    border-bottom: 6px solid ${palette.BLACK_COLOR};
    background: ${palette.YELLOW};
    display: inline-block;
    position: absolute;
    bottom: 14%;
    right: 8%;
    z-index: -1;
  }
`;

export const SectionHeader = styled.div`
  max-width: 645px;
  margin: 0 auto;
  padding: 50px 0px;
  h2, p {
    text-align: center;
  }
  p {
    margin-top: 12px;
  }
`;

export const HighlightsList = styled.div`
  max-width: 1000px;
  display: grid;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto auto;
  margin: 40px auto 80px;
  @media only screen and (max-width: 1200px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media only screen and (max-width: 992px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media only screen and (max-width: 576px) {
    grid-template-columns: 100%;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`;

export const ListContainer = styled.div`
  padding: 20px;
  margin-left: 30px;
`;

export const HighlightListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountStr = styled.h3`
  font-weight: bold;
  font-size: 96px;
  line-height: 86px;
  color: ${palette.PRIMARY_TXT_COLOR};
`;

export const ImageText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
  span {
    width: 28px;
    height: 28px;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4 {
    color: ${palette.WHITE_COLOR};
    opacity: 0.8;
    margin-left: 8px;
    font-weight: normal;
  }
`;
