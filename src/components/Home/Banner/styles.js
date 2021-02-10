import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const BannerSection = styled.section`
  padding: 0px 70px 60px;
  background: ${palette.BLACK_COLOR};
  @media only screen and (max-width: 768px) {
    padding: 0px 30px 30px;
  }
  .rowContainer {
    align-items: center;
    @media only screen and (min-width: 1500px) {
      max-width: 1300px;
      margin: 0 auto;
    }
  }
`;

export const Content = styled.div`
  padding: 0px 30px;
  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
  h2 {
    margin-bottom: 60px;
    max-width: 600px;
    position: relative;
    display: inline-block;
    z-index: 1;
    span {
      width: 89px;
      height: 89px;
      border-radius: 100%;
      background: ${palette.LIGHT_RED};
      display: block;
      position: absolute;
      top: -28px;
      left: -35px;
      z-index: -1;
    }
  }
  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow {
      margin-left: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 500px;
  display: inline-block;
`;

export const CardSec = styled.div`
  position: absolute;
  bottom: 8%;
  right: 0;
  display: inline-block;
  z-index: 1;
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    bottom: 4%;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    bottom: 3px;
  }
  .yellowBg {
    width: 78px;
    height: 78px;
    background: ${palette.YELLOW};
    border-radius: 100%;
    display: block;
    position: absolute;
    top: -35px;
    right: -35px;
    z-index: -1;
  }
`;

export const GlassCard = styled.div`
  background: linear-gradient(158.47deg, rgba(255, 255, 255, 0.4) 0.87%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(52.3587px);
  padding: 17px 45px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 365px;
  border-radius: 10px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 14px 35px 18px;
  }
  @media only screen and (max-width: 768px) {
    padding: 17px 25px 23px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: ${palette.WHITE_COLOR};
  margin-bottom: 10px;
`;

export const Logo = styled.span`
  max-width: 194px;
  display: inline-block;
  height: 51px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    max-width: 150px;
    height: 40px;
  }
`;
