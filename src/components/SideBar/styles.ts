import { styled } from 'styled-components';
import { colors } from 'styles/theme';

export const StyledSideBar = styled.section`
  width: 100px;
  background: ${({ theme }) => theme.contentOverlay};
  .hamburger {
    height: 40px;
    &__line {
      background-color: ${({ theme }) => theme.themeTextColor};
      width: 20px;
      height: 2px;
      display: block;
      transition: all 0.2s ease-in-out;
      transform-origin: bottom left;
    }
    &.active {
      .hamburger__line {
        &:nth-child(3) {
          transform: rotate(15deg);
        }
      }
    }
  }
  .side-bar {
    &__content {
      .link-wrapper {
        border-radius: 100px;
        position: relative;
        height: 44px;
        svg {
          width: 20px;
          height: 20px;

          &.current {
            path {
              fill: ${({ theme }) => theme.themeMainColor};
            }
          }
        }
        &:hover {
          background: ${({ theme }) => theme.themeMainColor};
          svg {
            path {
              fill: ${colors.white};
            }
          }
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .ghost-side-bar {
    backdrop-filter: blur(25px);
    transition: width 0.2s ease-in-out;
    width: 100px;
    &.expanded {
      width: 240px;
      .link-title {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  .link-title {
    min-width: 80px;
    position: absolute;
    left: 32px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
`;
