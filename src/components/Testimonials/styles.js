import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const CustomersSection = styled.div`
  background: ${palette.BLACK_COLOR};
  padding: 60px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px 50px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px;
  }
  @media (max-width: 576px) {
    padding: 30px;
  }
`;

export const SectionHeading = styled.div`
  padding: 20px 0px;
  text-align: center;
`;

export const CustomersList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 50px 0px;
  @media (min-width: 1500px) {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Customer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 30px 40px 20px;
  max-width: 25%;
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
  border-radius: 8px;
  padding: 30px;
  position: relative;
  h3 {
    margin: 0px 0px 15px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 30px 25px 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 20px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    max-width: 40%;
    margin: 40px 20px 20px;
  }
  @media (max-width: 576px) {
    max-width: 100%;
    margin: 90px 15px 15px;
    &:first-child {
      margin-top: 15px;
    }
  }
`;

export const CircleImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
  z-index: 1;
  width: 218px;
  height: 258px;
  img {
    height: 100%;
    display: inline-block;
    object-fit: cover;
  }
`;

export const WrapperDetails = styled.div`
  position: relative;
  margin-left: 32px;
  padding-top: 25px;
  padding-left: 32px;
  @media (max-width: 768px) {
    padding: 40px 20px 30px;
    margin-left: 0;
    h3 {
      text-align: center;
    }
  }
  h3 {
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    color: ${palette.WHITE_COLOR};
  }
`;

export const ContentBg = styled.div`
  position: absolute;
  right: 60px;
  top: -30px;
  width: 213px;
  display: inline-block;
  height: 213px;
`;

export const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px;
  p {
    max-width: 620px;
  }
  p, span {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.03em;
    color: ${palette.COCONUT_WHITE};
    display: block;
  }
  h4 {
    color: ${palette.WHITE_COLOR};
    margin-top: 26px;
    font-size: 24px;
    line-height: 31px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  background: ${palette.BUTTON_PRIMARY};
  box-shadow: 0px 0px 8px rgba(21,39,73,0.15);
  border-radius: 24px;
  max-width: 1100px;
  margin: 50px auto;
  @media (min-width: 1500px) {
    max-width: 1200px;
    margin: 0 auto;
  }
  .row {
    align-items: center;
    width: 100%;
    .imageCus {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .ant-carousel .slick-list .slick-slide > div > div {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    padding: 70px 50px 110px;
    position: relative;
  }
  .slick-dots {
    bottom: 50px !important;
  }
  .ant-carousel .slick-dots li {
    width: 20px;
    height: 5px;
  }
  .ant-carousel .slick-dots li.slick-active {
    width: 20px;
  }
  .ant-carousel .slick-dots li button {
    height: 5px;
    border-radius: 8px;
    background: ${palette.BLACK_COLOR};
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: #1976D1;
  }
  .leftArrow, .rightArrow {
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    cursor: pointer;
    span {
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  .leftArrow {
    margin-right: 16px;
  }
  @media (max-width: 768px) {
    .leftArrow, .rightArrow {
      display: none;
    }
    .ant-carousel .slick-list .slick-slide > div > div {
      padding: 40px 20px 20px;
    }
    .row {
      margin: 0;
      .ant-col {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const CustomBg = styled.div`
  position: relative;
  display: inline-block;
  &:after {
    content: '';
    background: ${palette.COD_GRAY};
    opacity: 0.5;
    border-radius: 16px;
    width: 218px;
    height: 218px;
    position: absolute;
    z-index: -1;
    right: -10%;
    bottom: -9%;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  right: 50px;
  display: flex;
  bottom: 40px;
`;
