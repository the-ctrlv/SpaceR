import { styled } from 'styled-components';
import { colors } from 'styles/theme';

export const StyledStatusDot = styled.div<{ $randomDelay: number }>`
  width: 24px;
  height: 24px;
  .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    z-index: 1;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .pulsating {
    border-radius: 100%;
    height: 24px;
    width: 24px;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    opacity: 0;
    animation-delay: ${({ $randomDelay }) => $randomDelay}s;
  }
  @-webkit-keyframes pulsate {
    0% {
      -webkit-transform: scale(0.1, 0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1.2, 1.2);
      opacity: 0;
    }
  }
  &.status-dot--working {
    .circle {
      background-color: ${colors.success};
    }
    .pulsating {
      border: 8px solid #a5e5ce;
    }
  }
  &.status-dot--issue {
    .circle {
      background-color: ${colors.warning};
    }
    .pulsating {
      border: 8px solid #edddb5;
    }
  }
  &.status-dot--error {
    .circle {
      background-color: ${colors.red};
    }
    .pulsating {
      border: 8px solid #f5b7b1;
    }
  }
`;
