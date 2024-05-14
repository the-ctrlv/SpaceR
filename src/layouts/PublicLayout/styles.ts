import { styled } from 'styled-components';
import { colors } from 'styles/theme';

export const StyledAuthLayout = styled.section`
  .content {
    &::before {
      content: '';
      width: 20vw;
      height: 20vw;
      position: absolute;
      bottom: 0vh;
      right: 50%;
      border-radius: 9999px;
      filter: blur(150px);
      transform: translateX(50%);
      background: ${colors.spaceBlue};
      z-index: -1;
    }
  }
`;
