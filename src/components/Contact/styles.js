import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SectionContainer = styled.div`
  background: ${palette.BLACK_COLOR};
`;

export const ContentContainer = styled.div`
  max-width: 793px;
  margin: 60px auto 45px;
  h2 {
    font-weight: 500;
    font-size: 72px;
    line-height: 86px;
    text-align: center;
  }
  @media only screen and (max-width: 769px) {
    margin: 0px;
    max-width: 412px;
    h2 {
      font-size: 36px;
      line-height: 47px;
    }
  }
`;

export const DescCont = styled.div`
  max-width: 646px;
  margin: 20px auto;
  font-size: 18px;
  line-height: 30px;
  opacity: 0.8;
  text-align: center;
  p {
    font-size: 18px;
    line-height: 30px;
    opacity: 0.8;
    text-align: center;
  }
  @media only screen and (max-width: 769px) {
    margin: 12px auto;
    font-size: 12px;
    line-height: 16px;
    p {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const ContactLinksContainer = styled.div`
  margin: 45px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    margin: 25px auto;
  }
`;

export const ContactLink = styled.a`
  padding: 36px 26px;
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  margin: 25px;
  @media only screen and (max-width: 769px) {
    margin: 10px;
  }
`;

export const ContactIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: ${palette.HEADING_COLOR};
  border-radius: 12px;
  margin-right: 16px;
  img {
    width: 32px;
    height: 32px;
    display: inline-block;
  }
  @media only screen and (max-width: 769px) {
    width: 46px;
    height: 46px;
    margin-right: 13px;
    img {
      width: 26px;
      height: 26px;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 25px;
    color: ${palette.SECONDARY_TXT_COLOR};
    opacity: 0.8;
  }
  .info {
    font-size: 18px;
  }
  @media only screen and (max-width: 769px) {
    span {
      font-size: 10px;
    }
    .info {
      font-size: 16px;
    }
  }
`;

export const IntouchMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px 30px;
  @media only screen and (max-width: 769px) {
    padding: 40px 0px 20px;
    .media-link {
      opacity: 1 !important;
      font-size: 24px;
      max-width: 20px !important;
      margin: 0px 8px !important;
    }
  }
  .media-link {
    max-width: 24px;
    margin: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 1;
    }
  }
`;