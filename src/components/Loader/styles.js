import styled from "styled-components";
import * as palette from '../../styles/variables';

export const LoaderImg = styled.div`
.loading-spinner {
  position: relative;
  margin: 0 auto;
  width: 75px;
  height: 300px;
}
.loading-spinner:before {
  content: '';
  display: block;
  padding-top: 100%;
}
.loading-spinner__circle-svg {
  animation: loading-spinner-rotate 1.28973s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loading-spinner__circle-stroke {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: loading-spinner-dash 2s ease-in-out infinite, loading-spinner-color 8s ease-in-out infinite;
  stroke-linecap: round;
  stroke-width: 4px;
}
@keyframes loading-spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes loading-spinner-color {
  100%,
  0% {
    stroke: ${palette.HEADING_COLOR};
  }
  40% {
    stroke: ${palette.HEADING_COLOR};
  }
  66% {
    stroke: ${palette.HEADING_COLOR};
  }
  80%,
  90% {
    stroke: ${palette.HEADING_COLOR};
  }
}
`;