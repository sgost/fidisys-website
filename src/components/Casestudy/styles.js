import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  background: ${palette.WHITE_COLOR};
  overflow: hidden;
`;

export const ProductFeatureBanner = styled.section`
  padding: 30px 30px 0px;
`;

export const ProductFeatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ProductFeatureDetails = styled.div`
  max-width: 500px;
  @media only screen and (max-width: 769px) {
    margin-bottom: 15px;
  }
`;

export const ProductFeatureWrapper = styled.div`
  max-width: 400px;
  margin-bottom: 50px;
  .product-feature-logo {
    max-width: 96px;
    margin-bottom: 30px;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
  }
  .product-feature-title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: ${palette.CHARCOAL};
    margin: 20px 0px 5px;
    transition-property: color, border-color, letter-spacing;
    transition-timing-function: ease;
    transition-duration: .5s;
    &:hover {
      letter-spacing: 1px;
    }
    @media only screen and (max-width: 769px) {
      font-size: 38px;
      line-height: 57px;
    }
  }
  .product-feature-caption {
    font-size: 18px;
    line-height: 26px;
    color: ${palette.CHARCOAL};
  }
`;

export const ProductFeaturesReview = styled.div`
  position: relative;
  max-width: 469px;
  background-color: #fafafa;
  padding: 40px 30px;
  transform: translateX(-30px);
  @media only screen and (max-width: 576px) {
    transform: unset;
  }
`;

export const PlaystoreReviewSmall = styled.div`
  display: flex;
  margin-bottom: 15px;
  .playstore-icon {
    width: 24px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .playstore-star-icons {
    display: flex;
    margin-right: 10px;
  }
  .playstore-star-icon {
    width: 16px;
    margin: 0px 1px;
  }
  .playstore-rating-num {
    font-size: 16px;
    line-height: 24px;
    color: ${palette.CHARCOAL};
  }
`;

export const ProductReviewNote = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: ${palette.CHARCOAL};
  margin-bottom: 15px;
`;

export const ProductReviewUser = styled.h6`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #0488d2;
`;

export const ProductReviewQuote = styled.div`
  position: absolute;
  max-width: 48px;
  top: -22px;
`;

export const ProductFeatureImage = styled.div`
  max-width: 475px;
`;

export const ProductImageBanner = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

export const InfoContainer = styled.section`
  padding: 65px 65px;
  @media only screen and (max-width: 769px) {
    padding: 25px;
  }
`;

export const InfoMaxContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
`;

export const InfoTextContainer = styled.div`
  div {
    position: relative;
    padding: 0px 90px 65px;
  }
  @media only screen and (max-width: 769px) {
    div {
      padding: 0px 0px 50px;
    }
    h2 {
      padding-top: 5px;
    }
  }
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: 0.04em;
    color: #201F1F;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
    transition-property: color, border-color, letter-spacing;
    transition-timing-function: ease;
    transition-duration: .5s;
    padding-top: 12px;
    &:hover {
      letter-spacing: 0.07em;
    }
    @media only screen and (max-width: 1025px) {
      font-size: 42px;
    }
    @media only screen and (max-width: 979px) {
      padding-left: 10px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
  h1 {
    position: absolute;
    top: -8px;
    left: 5px;
    font-weight: bold;
    font-size: 90px;
    letter-spacing: 0.04em;
    color: rgba(42, 16, 80, 0.04);
    margin-bottom: 15px;
    text-transform: uppercase;
    @media only screen and (max-width: 1179px) {
      top: -20px;
    }
    @media only screen and (max-width: 1025px) {
      top: -5px;
      font-size: 80px;
    }
    @media only screen and (max-width: 576px) {
      top: 8px;
      font-size: 54px;
    }
  }
  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    text-align: justify;
    letter-spacing: 0.04em;
    color: rgba(29, 33, 41, 0.7);
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  @media only screen and (max-width: 979px) {
    padding: 0px;
  }
`;
