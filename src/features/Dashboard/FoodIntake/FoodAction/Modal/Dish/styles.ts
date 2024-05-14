import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';

export const StyledDish = styled.li`
  .arrow-wrapper {
    background: ${({ theme }) => theme.insideContentOverlay};
    transition: all 0.3s ease;
    &.rotate {
      transform: rotate(-180deg);
    }
  }

  .dish-wrapper {
    svg {
      transition: all 0.4s ease-in-out;
      left: 0;
      position: relative;
    }
    .dish-title-wrapper {
      width: 280px;
      position: relative;
      left: 0;
      transition: all 0.4s ease-in-out;
      @media ${mqMax(breakpoints.md)} {
        width: 190px;
      }
    }
    &.rotate {
      svg {
        transform: rotate(-360deg) scale(1.1);
        left: -33px;
      }
      .dish-title-wrapper {
        left: -33px;
        width: 313px;
        @media ${mqMax(breakpoints.md)} {
          width: 220px;
        }
      }
    }
  }
  .dish-accordion {
    border-bottom: 1px solid ${({ theme }) => theme.themeBorder};
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.themeBorder};
      top: 12px;
    }
    li {
      border-radius: 10px;
      padding: 11px 16px;
      display: flex;
      justify-content: space-between;
      width: calc(50% - 4px);
      background-color: ${({ theme }) => theme.insideContentOverlay};
      p {
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        &::before {
          content: '';
          position: relative;
          width: 10px;
          height: 10px;
          margin-right: 5px;
          display: block;
          border-radius: 100%;
        }
      }
      span {
        font-size: 16px;
        font-weight: 600;
      }
      &:nth-child(1) {
        p {
          &::before {
            background-color: rgba(255, 255, 255, 0.8);
          }
        }
      }
      &:nth-child(2) {
        p {
          &::before {
            background-color: ${({ theme }) => theme.lightOrange};
          }
        }
      }
      &:nth-child(3) {
        p {
          &::before {
            background-color: ${({ theme }) => theme.orange};
          }
        }
      }
      &:nth-child(4) {
        p {
          &::before {
            background-color: ${({ theme }) => theme.red};
          }
        }
      }
    }
  }
`;
