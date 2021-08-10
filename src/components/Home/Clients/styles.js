import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px 0px 100px;
  background: ${palette.BLACK_COLOR};
  .serviceRow {
    max-width: 1050px;
    margin: 0 auto;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 30px 60px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 545px;
  margin: 0 auto;
  padding: 50px 0px;
  h2 {
    color: ${palette.WHITE_COLOR};
    text-align: center;
  }
  p {
    margin-top: 12px;
    text-align: center;
  }
`;

export const ClientsList = styled.div`
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-color: #252A30;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  margin: 20px 0px;
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 25% 25% 25% 25%;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 33% 33% 33%;
    grid-gap: 5px;
    margin: 0px;
    border-width: 0px;
    border-style: unset;
    border-color: unset;
    max-width: 550px;
    margin: 0 auto;
    /* hiding the last one in the mobile to fix the space */
    div:last-of-type {
      display: none;
    }
  }
`;

export const ClientDetail = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #252A30;
  border-width: 0 1px 1px 0;
  padding: 14px 40px;
  span {
    width: 200px;
    height: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    border-width: 0px;
    border-style: unset;
    border-color: unset;
    padding: 0px;
    span {
      width: 115px;
      height: 58px;
    }
  }
`;
