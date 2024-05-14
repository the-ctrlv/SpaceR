import { styled } from 'styled-components';

export const StyledNotes = styled.ul`
  max-height: calc(100vh - 280px);
  li {
    background: ${({ theme }) => theme.contentOverlay};
  }
`;
