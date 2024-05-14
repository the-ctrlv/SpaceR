import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';

export const StyledTooltip = styled.div`
  .info {
    path {
      &:nth-child(1) {
        stroke: ${({ theme }) => theme.themeTextColor};
      }
    }
  }
  .info-expanded {
    background-color: ${({ theme }) => theme.contentOverlay};
    svg {
      path {
        transition: all 0.4s ease-in-out;
        &:nth-child(1) {
          fill: ${({ theme }) => theme.insideContentOverlay};
        }
        &:nth-child(2) {
          fill: ${({ theme }) => theme.themeTextColor};
        }
      }
    }
    &:hover {
      svg {
        path {
          &:nth-child(1) {
            fill: ${({ theme }) => theme.themeTextColor};
          }
          &:nth-child(2) {
            fill: ${({ theme }) => theme.layoutBG};
          }
        }
      }
    }
  }
  .message-icon {
    path {
      stroke: initial;
    }
  }
  .header-info-icon {
    path {
      &:nth-child(1) {
        fill: ${({ theme }) => theme.themeTextColor};
      }
      &:nth-child(2) {
        fill: ${({ theme }) => theme.layoutBG};
      }
    }
  }
  .notification-icon {
    @media ${mqMax(breakpoints.lg)} {
      width: 28px;
      height: 28px;
    }
  }
`;
