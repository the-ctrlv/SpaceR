import { styled } from 'styled-components';

export const StyledHabitat = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .sensor-header {
    background-color: ${({ theme }) => theme.sensorHeader};
  }
`;
