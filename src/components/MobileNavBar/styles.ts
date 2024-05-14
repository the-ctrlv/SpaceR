import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';

export const StyledMobileNavBar = styled.div`
  nav {
    background: ${({ theme }) => theme.contentOverlay};

    svg {
      width: 24px;
      height: 24px;
    }
  }
  .expanded-menu {
    bottom: 16px;
    .link-container {
      background: ${({ theme }) => theme.contentOverlay};
      svg {
        width: 24px;
        height: 24px;
      }
      a {
        &:nth-child(2) {
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
        }
      }
    }
    button {
      background: ${({ theme }) => theme.contentOverlay};
      height: 64px;
    }
  }
  nav,
  .expanded-menu {
    width: calc(100% - 32px);
    bottom: 16px;
    max-width: 400px;
    left: 50%;
    transform: translateX(-50%);
    svg {
      &.current {
        path {
          fill: ${({ theme }) => theme.themeMainColor};
        }
      }
    }
  }
  .space-select {
    @media ${mqMax(breakpoints.xl)} {
      &__control {
        height: 60px;
      }
      &__menu {
        border-radius: 20px;
      }
      &__option {
        padding: 14px 24px;
      }
    }
  }
`;
