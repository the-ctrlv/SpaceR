import { styled } from 'styled-components';

export const StyledHealthSuite = styled.div`
  .analysis-data {
    li {
      width: calc(50% - 4px);
      margin-bottom: 8px;
      height: calc(50% - 4px);
      &:nth-child(3),
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
  }
`;
