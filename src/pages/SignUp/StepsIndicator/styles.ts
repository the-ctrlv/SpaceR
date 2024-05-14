import { css, styled } from 'styled-components';
import { switchProp } from 'styled-tools';
import { colors } from 'styles/theme';

export const StyledStepsIndicator = styled.div<{ $step: number }>`
  .active {
    transition: all 0.4s ease-in-out;
    background-color: ${colors.spaceBlue};
    &:not(:first-of-type) {
      animation: pulse 0.7s;
      animation-iteration-count: 1;
      animation-delay: 0.2s;
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.4);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
  .indicator {
    .core {
      height: 100%;
      transition: all 0.3s ease-in-out;
      background-color: ${colors.spaceBlue};
      ${switchProp('$step', {
        0: css`
          width: 0;
        `,
        1: css`
          width: 50%;
        `,
        2: css`
          width: 100%;
        `,
      })}
    }
  }
`;
