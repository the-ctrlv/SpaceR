import { css, styled } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledAvatar = styled.div<{ $isLightTheme: boolean }>`
  .icon-photo {
    .color-wrapper {
      background-color: ${({ theme }) => theme.themeTextColor};
    }
    svg {
      transition: all 0.3s ease-in-out;
      path {
        fill: ${({ theme }) => theme.layoutBG};
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      border-radius: 50%;
      z-index: -1;
      ${ifProp(
        { $isLightTheme: true },
        css`
          background: #d5dcf1;
        `,
        css`
          background: #161c2d;
        `
      )}
    }
  }
  &:hover {
    .icon-photo {
      svg {
        transform: rotate(180deg);
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    z-index: -1;
    ${ifProp(
      { $isLightTheme: true },
      css`
        background: #d5dcf1;
      `,
      css`
        background: #161c2d;
      `
    )}
  }
`;
