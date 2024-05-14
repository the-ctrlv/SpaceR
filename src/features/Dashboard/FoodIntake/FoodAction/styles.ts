import { styled } from 'styled-components';

export const StyledFoodAction = styled.li`
  background: ${({ theme }) => theme.contentOverlay};
  svg {
    path {
      fill: ${({ theme }) => theme.themeTextColor};
    }
  }
`;
