import { createGlobalStyle } from 'styled-components';
// Abstracts
import * as palette from './variables';

export const GlobalStyle = createGlobalStyle`
  @-ms-viewport {
  width: device-width;
  }
  html {
  box-sizing: border-box;
  font-size: 13pt;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  overflow-y: auto;
  scroll-behavior: smooth;
  letter-spacing: 0.05em;
  }

  body {
  -ms-overflow-style: scrollbar;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  background-color: ${palette.APP_BACKGROUND_COLOR} !important;
  }

  html, body, #root {
  width: 100%;
  height: 100%;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }

  ol, ul {
  list-style: none;
  }

  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
  content: none;
  }
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
  }
  input, select, textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  }
  body, input, select, textarea, button {
  font-family: ${palette.FONT_FAMILY} !important;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.65;
  }
  section {
  position: relative;
  }
  a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  }
  strong {
  font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
  line-height: 1.25;
  }

  h1 {
  font-size: 36px;
  }

  h2 {
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    color: ${palette.PRIMARY_TXT_COLOR};
    @media only screen and (max-width: 768px) {
      font-size: 36px;
      line-height: 47px;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: ${palette.SECONDARY_TXT_COLOR};
    @media only screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 21px;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: ${palette.SECONDARY_TXT_COLOR};
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
  }

  img {
    width: 100%;
  }

  p {
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${palette.SECONDARY_TXT_COLOR};
    @media only screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
  
  .ant-message-notice {
    text-align: right;
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.70) !important;
  }
  .ant-modal-mask, .ant-modal-wrap {
    left: 65px !important;
  }
  .ant-modal {
    width: initial !important;
    max-width: 500px;
    top: 90px !important;
    margin: 0 !important;
  }
  .ant-modal-content {
    border-radius: 0px !important;
  }
  .ant-modal-body {
    padding: 0px !important;
  }

  .ant-select {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px !important;
    color: ${palette.CHARCOAL};
    .ant-select-arrow {
      right: 20px;
    }
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${palette.PRIMARY_SECTION_BACKGROUND};
  }
  .ant-select-selector {
    height: 48px !important;
    min-height: 38px !important;
    display: flex !important;
    align-items: center !important;
    box-shadow: 0px 0px 5px rgba(25, 39, 67, 0.1) !important;
    border-radius: 8px !important;
    padding: 11px 24px !important;
    border: 1px solid ${palette.BORDER_COLOR} !important;
    &:hover {
      border-color: ${palette.BORDER_COLOR} !important;
    }
    .ant-select-selection-search-input {
      height: 48px !important;
      text-overflow: ellipsis;
    }
    .ant-select-selection-placeholder {
      color: ${palette.DARK_GREY};
    }
  }
  .ant-select-dropdown-menu-item {
    padding: 7px 14px !important;
  }
  .tags-selection {
    max-width: 100% !important;
  }
  .ant-tooltip {
    line-height: 1 !important;
  }
  .ant-tooltip-inner {
    min-height: 20px !important;
    font-size: 12px;
    font-weight: 600;
  }
  .ant-dropdown-menu-item {
    &:hover {
      background-color: #3b4ada14 !important;
    }
  }
  .ant-modal-header {
    background: initial !important;
    border-bottom: initial !important;
    .modal-title {
      font-size: 24px;
      color: #5860AF;;
      position: relative;
      padding-bottom: 12px;
      text-transform: capitalize;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 75px;
        height: 4px;
        border-radius: 2px;
        background-color: #CAC8F6;
        bottom: 0px;
        left: 5px;
      }
    }
  }
  .ant-modal-footer {
    padding: 16px 24px !important;
    border: initial !important;
  }
  .ant-btn {
    border-radius: 100px;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${palette.WHITE_COLOR};
    padding: 12px 24px;
    height: 44px;
    border: 2px solid ${palette.BUTTON_PRIMARY};
    box-shadow: none;
    text-transform: uppercase;
    background-color: ${palette.BLACK_COLOR};
    &.active, &:hover, &:focus {
      color: ${palette.WHITE_COLOR} !important;
      border-color: ${palette.BUTTON_PRIMARY} !important;
      background-color: ${palette.BUTTON_PRIMARY} !important;
    }
    &:hover {
      background-color: ${palette.BUTTON_PRIMARY} !important;
      border-color: ${palette.BUTTON_PRIMARY} !important;
      color: ${palette.WHITE_COLOR} !important;
      box-shadow: none !important;
    }
  }
  .ant-btn-primary {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    height: 54px;
    padding: 8px 24px;
    letter-spacing: 0.05em;
    background-color: ${palette.BUTTON_PRIMARY} !important;
    border-color: ${palette.BUTTON_PRIMARY} !important;
    color: ${palette.WHITE_COLOR} !important;
    text-transform: capitalize;
    &.active, &:hover, &:focus {
      color: ${palette.WHITE_COLOR} !important;
      border-color: ${palette.BUTTON_PRIMARY} !important;
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px !important;
      height: 40px !important;
      padding: 8px 18px !important;
    }
  }
  .ant-input {
    text-overflow: ellipsis;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px !important;
    color: ${palette.CHARCOAL};
    padding: 11px 24px;
    box-shadow: 0px 0px 5px rgba(25, 39, 67, 0.1) !important;
    border-radius: 8px;
    &:focus, &:hover {
      border: 1px solid ${palette.BORDER_COLOR} !important;
    }
    &:placeholder-shown {
      color: ${palette.DARK_GREY};
    }
  }

  .ant-modal-confirm-body-wrapper {
    padding: 25px;
  }
  .ant-modal-mask, .ant-modal-wrap {
    left: 0 !important;
  }
  .ant-modal {
    width: 100% !important;
    max-width: 100% !important;
    top: 0 !important;
    bottom: 0 !important;
    height: 100% !important;
    padding: 0 !important;
  }
  .ant-modal-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  .ant-modal-content {
    background: ${palette.PRIMARY_SECTION_BACKGROUND};
  }
  .ant-modal-close {
    top: 10px;
    right: 20px;
  }
  .ant-modal-close-x {
    font-size: 20px;
  }
  .ant-modal-header {
    text-align: center;
    padding: 20px 24px;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${palette.BUTTON_PRIMARY};
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${palette.BUTTON_PRIMARY};
    border-color: ${palette.BUTTON_PRIMARY};
  }

  .gradBg {
    backdrop-filter: blur(40px);
    background: linear-gradient(112.67deg, rgba(0, 0, 0, 0.4) 29.46%, rgba(0, 0, 0, 0.2) 70.54%);
  }

  .drawerNavMenu {
    .ant-drawer-header {
      background: transparent !important;
      border: none !important;
      padding: 28px 30px !important;
    }
    .ant-drawer-content-wrapper {
      width: 100% !important;
    }
    .ant-drawer-content {
      backdrop-filter: blur(40px);
      background: linear-gradient(112.67deg ,rgba(0,0,0,0.4) 29.46%, rgba(0,0,0,0.2) 70.54%);
    }
    .ant-drawer-close {
      color: ${palette.WHITE_COLOR} !important;
      font-size: 14px;
      top: 8px;
      right: 10px;
    }
    .ant-drawer-footer {
      border: none !important;
    }
  }
  .menuLogo {
    width: 73px;
    height: 24px;
    display: inline-block;
  }

  .blogListContainer {
    max-width: 700px;
    margin: 48px auto;
    h2 {
      font-size: 30px;
      padding: 24px;
      color: ${palette.BLACK_COLOR};
    }
    .blogListItem {
      box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
      background-color: ${palette.WHITE_COLOR};
      border-radius: 16px;
      margin-bottom: 24px;
      position: relative;
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      @media (max-width: 768px) {
        margin: 0px 20px 24px 20px;
      }
      &:hover {
        transform: translateY(-0.25rem);
        box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
      }
      a {
        display: inline-block;
        padding: 48px;
        @media (max-width: 768px) {
          padding: 24px;
        }
      }
      .blogHeading {
        margin-bottom: 24px;
        font-size: 22px;
        color: ${palette.BLACK_COLOR};
      }
      .blogExcerpt {
        margin-bottom: 24px;
        color: #78757a;
        font-size: 16px;
      }
      .blogInfo {
        display: flex;
        flex-direction: row;
        align-items: center;
        .authorImage {
          width: 25px;
          border-radius: 100%;
        }
        img {
          height: 100%;
          display: block;
        }
        span {
          margin-left: 2px;
          color: #78757a;
          font-size: 14px;
        }
      }
    }
  }

`;
