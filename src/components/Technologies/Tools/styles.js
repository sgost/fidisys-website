import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${palette.BLACK_COLOR};
  @media only screen and (max-width: 768px) {
    padding: 30px;
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
`;

export const ToolsListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
  @media only screen and (max-width: 768px) {
    padding: 20px 0px;
    margin: 0px;
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
