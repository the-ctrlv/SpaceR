import { styled } from 'styled-components';

export const StyledActivityIntake = styled.div`
  .wrapper {
    max-height: calc(100vh - 280px);
    background: ${({ theme }) => theme.contentOverlay};
  }
  .list-wrapper {
    ul {
      li {
        position: relative;
        padding-left: 15px;
        margin-bottom: 12px;
        &:before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background: ${({ theme }) => theme.themeTextColor};
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;
