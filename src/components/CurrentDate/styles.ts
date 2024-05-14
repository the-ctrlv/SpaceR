import { styled } from 'styled-components';

export const StyledCurrentDate = styled.div`
  svg {
    path {
      fill: ${({ theme }) => theme.themeTextColor};
    }
  }
`;
