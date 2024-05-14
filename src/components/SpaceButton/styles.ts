import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { breakpoints, mqMax } from 'styles/responsive';
import { Gradient, IThemeItem, colors } from 'styles/theme';

const colorsData: IThemeItem = colors;
const gradient: Gradient = colorsData.gradient as Gradient;

export const StyledSpaceButton = styled.button<{ $isLightTheme: boolean }>`
  height: 51px;
  min-width: 150px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 10px 10px 30px rgba(73, 106, 156, 0.2);
  &:not(.no-max-width) {
    max-width: 200px;
    @media ${mqMax(breakpoints.lg)} {
      max-width: 300px;
    }
    @media ${mqMax(breakpoints.md)} {
      max-width: 220px;
    }
  }

  &:not(.space-btn--outline) {
    background: ${gradient.blue};
  }
  &.space-btn--outline {
    border: 1px solid ${colors.spaceBlue};
    box-shadow: none;
    color: ${colors.spaceBlue};
    &[disabled] {
      opacity: 0.5;
    }
  }
  &.space-btn--secondary {
    ${ifProp(
      { $isLightTheme: true },
      css`
        background: #5e57a529;
        backdrop-filter: blur(10px);
      `,
      css`
        background: rgba(207, 209, 221, 0.1);
      `
    )}
  }
`;
