import { styled } from 'styled-components';

export const StyledFileItem = styled.li`
  .arrow-wrapper {
    background: ${({ theme }) => theme.insideContentOverlay};
    transition: all 0.3s ease;
    &.rotate {
      transform: rotate(-180deg);
    }
  }
`;
