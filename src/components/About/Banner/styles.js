import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  background: ${palette.BLACK_COLOR};
  padding-top: 60px;
`;

export const BannerTitle = styled.div`
  font-weight: 500;
  font-size: 72px;
  line-height: 86px;
  color: ${palette.PRIMARY_TXT_COLOR};
  padding: 0px 30px 70px;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 47px;
  }
`;

export const LayoutContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 546px;
  @media only screen and (max-width: 768px) {
    height: 273px;
  }
`;

export const BannerBg = styled.div`
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0px;
  bottom: 0;
  left: 0px;
`
