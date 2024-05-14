import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';
import { colors } from 'styles/theme';

export const StyledModalSkip = styled.div`
  ul {
    li {
      background: rgba(255, 255, 255, 0.05);
      transition: background 0.2s ease;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 50vw;
    height: 50vw;
    background: ${colors.spaceBlue};
    filter: blur(300px);
    @media ${mqMax(breakpoints.md)} {
      width: 100vw;
      height: 100vw;
    }
  }
`;
