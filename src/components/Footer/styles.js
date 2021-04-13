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
      transition: margin 0.5s ease-in-out;
      @media only screen and (max-width: 768px) {
        width: 18px;
        height: 18px;
        margin-left: 8px !important;
      }
    }
    &:hover {
      .arrow {
        margin-left: 18px;
      }
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
