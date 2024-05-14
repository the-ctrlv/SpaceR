import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';

export const StyledAnalysisItem = styled.li`
  height: calc(33% - 4px);
  @media ${mqMax(breakpoints.xl)} {
    height: 70px;
  }
`;
