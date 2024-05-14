import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';
import { colors } from 'styles/theme';

export const StyledFoodIntake = styled.div`
  height: 594px;
  @media ${mqMax(breakpoints.lg)} {
    height: auto;
  }
  .progress-wrapper {
    background: ${({ theme }) => theme.contentOverlay};
    ul {
      li {
        position: relative;
        padding-left: 15px;
        &:before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background: ${({ theme }) => theme.themeTextColor};
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .summary {
    background: ${({ theme }) => theme.contentOverlay};
    ul {
      li {
        display: flex;
        align-items: center;
        .dot {
          border-radius: 9999px;
          width: 10px;
          height: 10px;
          margin-right: 8px;
        }
        > span {
          font-size: 14px;
          display: block;
          font-weight: 500;
          margin-bottom: 5px;
        }
        &:first-child {
          .dot {
            background: ${colors.lightOrange};
          }
        }
        &:nth-child(2) {
          .dot {
            background: ${colors.orange};
          }
        }
        &:nth-child(3) {
          .dot {
            background: ${colors.red};
          }
        }
      }
    }
  }
  .summary-data {
    li {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      p {
        display: flex;
        align-items: center;
        font-weight: 700;
        &::before {
          content: '';
          position: relative;
          width: 5px;
          height: 5px;
          margin-right: 8px;
          display: block;
          border-radius: 100%;
          background-color: ${({ theme }) => theme.themeTextColor};
        }
      }
      span {
        font-weight: 700;
        letter-spacing: 1px;
      }

      &.extra {
        p {
          font-weight: 400;
          &::before {
            background-color: transparent;
          }
        }
        span {
          font-weight: 400;
        }
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .food-supplies {
    background: ${({ theme }) => theme.contentOverlay};
  }
`;
