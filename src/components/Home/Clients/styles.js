import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px 0px;
  background: ${palette.WHITE_COLOR};
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
    color: #0F0F0F;
  }
  p {
    margin-top: 12px;
    opacity: 0.6;
  }
`;

export const ClientsList = styled.div`
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-color: rgba(146, 166, 195, 0.3);
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  margin: 20px 0px;
`;

export const ClientDetail = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: rgba(146, 166, 195, 0.3);
  border-width: 0 1px 1px 0;
  padding: 14px 40px;
  span {
    width: 200px;
    height: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;
