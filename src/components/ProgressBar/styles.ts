import { styled } from 'styled-components';

export const StyledProgressBar = styled.div<{ $value: string }>`
  .progress-bar {
    height: 11px;
    background-color: ${({ theme }) => theme.insideContentOverlay};
    &__fill {
      width: ${({ $value }) => $value};
    }
  }
`;
