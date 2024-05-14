import { styled } from 'styled-components';
import { breakpoints, mqMin } from 'styles/responsive';

export const StyledFileList = styled.ul`
  height: calc(100vh - 338px);
  overflow: auto;
  @media ${mqMin(breakpoints.md)} {
    height: calc(100vh - 315px);
  }
  @media ${mqMin(breakpoints.lg)} {
    height: auto;
  }
  @media ${mqMin(breakpoints.xl)} {
    overflow: visible;
    height: 100%;
  }
`;
