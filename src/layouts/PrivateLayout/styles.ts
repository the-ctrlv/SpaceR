import styled from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';
import { colors } from 'styles/theme';

export const StyledWorkLayout = styled.section`
  background-color: ${({ theme }) => theme.layoutBG};
  transition: background-color 0.2s ease-in-out;
  position: relative;
  .side-bar {
    &::after {
      content: '';
      display: block;
      width: 35vw;
      height: 35vw;
      background-color: ${colors.spaceBlue};
      border-radius: 9999px;
      position: fixed;
      bottom: -10vw;
      left: 40px;
      filter: blur(200px);
    }
  }
  .main-wrapper {
    width: calc(100vw - 100px);
  }
  .content-container {
    margin: 0 auto;
  }
  &::before {
    content: '';
    display: block;
    width: 24vw;
    height: 24vw;
    background-color: ${colors.spaceBlue};
    border-radius: 9999px;
    position: fixed;
    top: 120px;
    left: 50%;
    filter: blur(150px);
    @media ${mqMax(breakpoints.md)} {
      width: 70vw;
      height: 70vw;
      filter: blur(175px);
    }
  }
  &::after {
    content: '';
    display: block;
    width: 34vw;
    height: 34vw;
    background-color: ${colors.spaceBlue};
    border-radius: 9999px;
    position: fixed;
    bottom: 5vh;
    right: -10vw;
    filter: blur(175px);
    z-index: 0;
    @media ${mqMax(breakpoints.md)} {
      width: 70vw;
      height: 70vw;
      filter: blur(150px);
    }
  }
`;
