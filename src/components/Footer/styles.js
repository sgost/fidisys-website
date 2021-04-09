import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SectionContainer = styled.footer`
  padding: 75px;
  background-color: ${palette.BLACK_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 845px) {
    padding: 50px 35px;
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
