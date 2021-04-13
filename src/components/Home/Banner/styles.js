import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const BannerSection = styled.section`
  padding: 0px 70px 50px;
  background: ${palette.BLACK_COLOR};
  @media only screen and (max-width: 768px) {
    padding: 30px 30px;
    .rowContainer {
      justify-content: center;
      .ant-col {
        min-width: 100%;
      }
      .bannerImg {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 40px 70px 50px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 26px;
      line-height: 34px;
      margin-bottom: 30px !important;
      text-align: center;
      &:before {
        width: 50px !important;
        height: 50px !important;
        top: -12px !important;
        left: unset !important;
        margin: 0 -20px;
      }
    }
    .ant-btn {
      font-size: 14px !important;
      height: 40px !important;
      padding: 8px 18px !important;
      .arrow {
        width: 18px;
        height: 18px;
        margin-left: 8px !important;
      }
    }
  }
  h2 {
    margin-bottom: 60px;
    max-width: 600px;
    position: relative;
    display: inline-block;
    z-index: 1;
    &:before {
      content: '';
      width: 89px;
      height: 89px;
      border-radius: 100%;
      background: ${palette.LIGHT_RED};
      display: inline-block;
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
    padding: 0px !important;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .btnCont {
      max-width: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${palette.WHITE_COLOR} !important;
      padding: 15px 25px;
      &:hover, &:active, &:focus {
        color: ${palette.WHITE_COLOR} !important;
      }
      &:hover {
        border-color: ${palette.BUTTON_PRIMARY};
        .btn-bg {
          width: 282%;
          height: ${133*2.25}%;
        }
      }
      .btn-bg {
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 0%;
        height: 0%;
        background-color: ${palette.BLACK_COLOR};
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
    .arrow {
      margin-left: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: margin 0.3s ease-in-out;
    }
    &:hover {
      .arrow {
        margin-left: 18px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 500px;
  display: inline-block;
  @media only screen and (max-width: 768px) {
    width: 320px;
    height: 270px;
    overflow: hidden;
  }
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
  @media only screen and (max-width: 768px) {
    position: relative;
    margin: 30px 0px 20px;
    .yellowBg {
      width: 45px;
      height: 45px;
      top: -20px;
      right: -20px;
    }
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
    padding: 16px 30px;
    max-width: 270px;
    margin: 0 auto;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: ${palette.WHITE_COLOR};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Logo = styled.span`
  max-width: 194px;
  display: inline-block;
  height: 51px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    max-width: 150px;
    height: 40px;
  }
  @media only screen and (max-width: 768px) {
    height: 38px;
    width: 143px;
  }
`;
