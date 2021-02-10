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

export const ServiceListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  @media only screen and (max-width: 768px) {
    padding: 25px 0px;
  }
  span {
    background: linear-gradient(135.63deg, #222222 2.64%, #292929 98.78%), #272727;
    border-radius: 16px;
    width: 142px;
    height: 142px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      height: 80px;
      display: inline-block;
    }
  }
  h3 {
    text-align: center;
    margin-top: 20px;
  }
`;
