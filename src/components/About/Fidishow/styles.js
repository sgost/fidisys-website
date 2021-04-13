import styled from 'styled-components';
import * as palette from '../../../styles/variables';

export const SectionContainer = styled.section`
  padding: 80px 60px;
  background: ${palette.SECONDARY_SECTION_BACKGROUND};
  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
  &:nth-child(odd) {
    .contentSec {
      padding-right: 50px;
      @media only screen and (max-width: 768px) {
        padding-right: 0px;
      }
    }
  }
  &:nth-child(even) {
    background: ${palette.BLACK_COLOR};
    .workRow {
      flex-direction: row-reverse;
    }
    .contentSec {
      padding-left: 50px;
      @media only screen and (max-width: 768px) {
        padding-left: 0px;
      }
    }
  }
`;

export const WorksList = styled.div`
  .workRow {
    align-items: center;
    max-width: 1200px;
    margin: 0px auto;
    padding: 40px 0px 25px;
    @media only screen and (min-width: 1500px) {
      max-width: 1300px;
    }
    @media only screen and (max-width: 768px) {
      .ant-col {
        min-width: 100%;
      }
    }
  }
`;

export const ContentSection = styled.div`
  max-width: 656px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
  h2 {
    font-size: 72px;
    line-height: 86px;
    font-weight: 500;
    color: ${palette.SECONDARY_TXT_COLOR};
    span {
      font-weight: 700;
      color: ${palette.WHITE_COLOR};
    }
    @media only screen and (min-width: 1200px) and (max-width: 1310px) {
      font-size: 68px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1250px) {
      font-size: 50px;
      line-height: 62px;
    }
    @media only screen and (max-width: 992px) {
      font-size: 36px;
      line-height: 47px;
    }
  }
  .description {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    opacity: 0.8;
    margin: 30px 0px;
    max-width: 540px;
    color: ${palette.SECONDARY_TXT_COLOR};
    opacity: 0.8;
    @media only screen and (max-width: 768px) {
      text-align: center;
      font-size: 12px;
      line-height: 16px;
    }
  }
  .viewLink {
    font-weight: normal;
    font-size: 8px;
    line-height: 8px;
    color: #888888;
    margin-top: 22px;
    display: inline-flex;
    padding: 0px !important;
    z-index: 1;
    position: relative;
    overflow: hidden;
    border: 1px solid #888888;
    border-radius: 8px;
    &:hover, &:active, &:focus {
      border-color: ${palette.BUTTON_PRIMARY};
      color: ${palette.WHITE_COLOR};
    }
    .btnCont {
      max-width: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 8px;
      &:hover, &:active, &:focus {
        color: ${palette.WHITE_COLOR} !important;
      }
      &:hover {
        border-color: ${palette.BUTTON_PRIMARY};
        color: ${palette.WHITE_COLOR};
        .btn-bg {
          width: 250%;
          height: ${133*2.25}%;
        }
      }
      .btn-bg {
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 0%;
        height: 0%;
        background-color: ${palette.BUTTON_PRIMARY};
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
    &:hover, &:active, &:focus {
      color: ${palette.SECONDARY_TXT_COLOR};
    }
    .icon {
      width: 115px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      text-align: center;
    }
  }
`;

export const ImageSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    max-width: 500px;
    display: inline-block;
  }
`;

export const PodcastAuthor = styled.div`
  font-weight: 500;
  font-size: 21px;
  line-height: 32px;
  color: ${palette.WHITE_COLOR};
  display: inline-flex;
  span {
    width: 97px;
    display: inline-flex;
    margin-left: 16px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 19px;
    span {
      width: 58px;
      margin-left: 10px;
    }
  }
`;

export const EpisodesContainer = styled.div`
  max-width: 1200px;
  margin: 45px auto 0px;
  @media only screen and (min-width: 1500px) {
    max-width: 1300px;
  }
  h3 {
    color: #EEEEEE;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    margin: 45px auto 30px;
    h3 {
      font-size: 24px;
      line-height: 31px;
    }
  }
`;

export const EpisodesList = styled.div`
  max-width: 662px;
`;

export const EpisodeListItem = styled.a`
  display: block;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 34px 0px;
  .ant-row {
    align-items: center;
  }
`;

export const EpisodeContent = styled.div`
  margin-right: 12px;
  h4 {
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
    opacity: 0.8;
  }
  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    opacity: 0.5;
    margin-top: 8px;
    display: inline-block;
  }
  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 14px;
      line-height: 22px;
    }
    span {
      font-size: 10px;
    }
  }
`;
