import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const FooterSection = styled.div`
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  padding: 60px 20px 80px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 45px 50px 80px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 30px 40px 70px;
  }
  @media (max-width: 768px) {
    padding: 30px 30px 70px;
  }
`;

export const SitemapContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (min-width: 1500px) {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .logoListItem {
      flex: 1 1 100%;
      margin: 15px 15px 0px;
    }
  }
`;

export const SitemapList = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0px 12px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin: 15px 30px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    margin: 20px;
  }
  @media (max-width: 768px) {
    margin: 15px;
    flex: 1 1 30%;
  }
  h5 {
    color: ${palette.WHITE_COLOR};
    margin-bottom: 8px;
    a {
      color: ${palette.WHITE_COLOR};
    }
  }
  .linkItem {
    color: #CFCFD0;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    &:hover {
      color: ${palette.HEADING_COLOR};
    }
    .logo {
      height: 32px;
      width: 97px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 0px 18px;
  }
`;

export const IntouchFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntouchMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 50px 0px 30px;
  @media only screen and (max-width: 769px) {
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

export const IntouchCopyrights = styled.div`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: ${palette.ROSE_WHITE};
  opacity: 0.8;
`;
