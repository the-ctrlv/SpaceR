import { css, styled } from 'styled-components';
import { ifProp } from 'styled-tools';
import { breakpoints, mqMax } from 'styles/responsive';

export const StyledSpaceModal = styled.div<{ $isLightTheme: boolean }>`
  &.modal-overlay {
    background-color: ${({ theme }) => theme.modalOverlay};
    backdrop-filter: blur(4px);
  }
  .modal-container {
    background-color: ${({ theme }) => theme.contentOverlay};
    width: 100%;
    height: auto;
    @media ${mqMax(breakpoints.md)} {
      max-height: 80vh;
    }
    ${ifProp(
      { $isLightTheme: true },
      css`
        background: #fff;
      `,
      css`
        background: #1f1f23;
      `
    )}
  }
  .modal-content {
  }
`;
