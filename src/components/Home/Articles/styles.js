import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const SectionHeading = styled.div`
  max-width: 545px;
  margin: 0 auto;
  padding: 20px 0px;
  h2 {
    text-align: center;
  }
`;

export const ArticlesList = styled.div`
  margin: 25px auto;
  max-width: 1000px;
  @media only screen and (max-width: 768px) {
    margin: 12px auto;
    max-width: 600px;
  }
`;

export const ArticleListItem = styled.a`
  padding: 30px 0px;
  display: block;
  @media only screen and (max-width: 768px) {
    padding: 12px 0px;
  }
`;

export const PreviewImage = styled.div`
  height: 100%;
  span {
    background: ${palette.SILVER};
    border-radius: 16px;
    display: flex;
    overflow: hidden;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const BlogContent = styled.div`
  padding-left: 50px;
  p {
    color: ${palette.COCONUT_WHITE};
    opacity: 0.6;
    margin: 15px 0px;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.03em;
    color: ${palette.COCONUT_WHITE};
    opacity: 0.8;
    margin-top: 30px;
    display: block;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 16px;
    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
    p {
      display: none;
    }
    span {
      font-size: 10px;
      line-height: 26px;
      margin-top: 10px;
    }
  }
`;
