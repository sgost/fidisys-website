import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SectionContainer = styled.section`
  background: ${palette.BLACK_COLOR};
  padding: 60px 0px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 40px 0px;
  }
  @media (max-width: 768px) {
    padding: 30px 0px;
  }
`;

export const SectionHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 50px;
  padding-left: 25px;
  @media only screen and (min-width: 1500px) {
    max-width: 1300px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 15px;
  }
  span {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: ${palette.SECONDARY_TXT_COLOR};
  }
  h2 {
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    color: #FB478D;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-flow: row dense;
  grid-gap: 0px;
	@media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.a`
  display: block;
  position: relative;
  height: 270px;
  display: flex;
  overflow: hidden;
  background: ${palette.BLACK_COLOR};
  transition: padding 0.62s ease-in-out;
  @media only screen and (max-width: 768px) {
    height: 100% !important;
  }
  img {
    height: 100%;
    object-fit: cover;
    display: inline-block;
  }
  &:hover {
    padding: 30px;
  }
`;
