import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SectionContainer = styled.footer`
  padding: 75px;
  background-color: ${palette.SECONDARY_SECTION_BACKGROUND};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 845px) {
    padding: 35px;
  }
`;

export const IntouchContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const IntouchSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 0px;
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
  .intouch-msg {
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 0.06em;
		color: ${palette.ROSE_WHITE};
		opacity: 0.8;
		margin: 0px;
	}
	.idea-img {
		max-width: 700px;
    padding: 10px;
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
  margin-bottom: 25px;
  @media only screen and (max-width: 769px) {
    margin-top: 100px;
    .media-link {
      opacity: 1 !important;
      font-size: 24px;
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
