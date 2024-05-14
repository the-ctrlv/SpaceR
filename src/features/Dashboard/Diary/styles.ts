import { styled } from 'styled-components';
import { breakpoints, mqMax, mqMin } from 'styles/responsive';

export const StyledDiary = styled.div`
  height: 594px;
  @media ${mqMax(breakpoints.xl)} {
    height: 100%;
  }
  @media ${mqMin(breakpoints.xl)} {
    .notes-wrapper {
      height: calc(100% - 114px);
    }
  }
`;
