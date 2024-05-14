import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';

export const StyledThemeSwitcher = styled.div`
  position: relative;
  width: 72px;
  height: 40px;
  background: ${({ theme }) => theme.contentOverlay};
  .switcher {
    &__circle {
      background: ${({ theme }) => theme.gradient.themeSwitcher};
      position: absolute;
      top: 4px;
      left: 4px;
      transition: all 0.2s ease-in-out;
      transform: rotate(0);
      &.switched {
        transform: rotate(90deg);
        left: calc(100% - 32px - 4px);
      }
    }
  }
  @media ${mqMax(breakpoints.xl)} {
    height: 60px;
    width: 114px;
    .switcher {
      &__circle {
        height: 44px;
        width: 44px;
        top: 8px;
        left: 8px;
        &.switched {
          left: calc(100% - 44px - 8px);
        }
      }
    }
  }
`;
