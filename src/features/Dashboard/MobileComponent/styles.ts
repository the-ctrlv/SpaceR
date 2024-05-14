import { styled } from 'styled-components';

export const StyledMobileItem = styled.li`
  height: 70px;
  .icon-wrapper {
    height: 70px;
    width: 70px;
    background-color: rgba(255, 255, 255, 0.08);
  }
  .component-icon {
    path {
      stroke: ${({ theme }) => theme.themeTextColor};
    }
    &.filled {
      path {
        fill: ${({ theme }) => theme.themeTextColor};
      }
    }
  }
`;
