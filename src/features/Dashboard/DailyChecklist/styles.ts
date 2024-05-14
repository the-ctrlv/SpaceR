import { css, styled } from 'styled-components';
import { ifProp } from 'styled-tools';
import { breakpoints, mqBetween, mqMax } from 'styles/responsive';

export const StyledDailyChecklist = styled.div`
  height: 916px;
  @media ${mqMax(breakpoints.lg)} {
    height: auto;
  }
  .checklist {
    height: calc(916px - 104px);
    overflow: auto;
    @media ${mqMax(breakpoints.xl)} {
      height: calc(100vh - 250px);
    }
  }
  @media ${mqBetween(breakpoints.xl, breakpoints.xxl)} {
    height: auto;
    .space-select {
      max-width: 250px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
    }
    .overflow-wrapper {
      overflow-x: auto;
      overflow-y: hidden;
      width: calc(100% + 32px);
      transform: translateX(-16px);
    }
    .checklist {
      padding-top: 16px;
      height: auto;
      width: auto;
      display: flex;
      gap: 16px;
      scrollbar-width: none;
      -ms-overflow-style: none;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-box-align: stretch;
      li {
        min-width: 300px;
        margin-bottom: 0;
        &:first-child {
          margin-left: 16px;
        }
        &:last-child {
          margin-right: 16px;
        }
      }
    }
  }
`;

export const StyledToDoCard = styled.li<{ $isLightTheme: boolean }>`
  border-radius: 16px;
  background: ${({ theme }) => theme.contentOverlay};
  color: #fff;
  position: relative;

  .animated-wrapper {
    color: ${({ theme }) => theme.themeTextColor};
    transform: translateY(60%);
    transition: transform 0.3s ease-in-out;
    height: 75%;
    z-index: 2;
    @media ${mqMax(breakpoints.lg)} {
      transform: translateY(70%);
    }
  }
  &::before {
    content: '';
    position: absolute;
    bottom: -70%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: bottom 0.3s ease-in-out;
    z-index: 1;
    @media ${mqMax(breakpoints.lg)} {
      bottom: -75%;
    }
    ${ifProp(
      { $isLightTheme: true },
      css`
        background: #fff;
      `,
      css`
        background: transparent;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 16px;
      `
    )}
  }
  &:hover {
    .animated-wrapper {
      transform: translateY(0);
    }
    &:before {
      bottom: 0;
    }
  }
`;
