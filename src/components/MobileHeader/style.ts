import { styled } from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';
import { colors } from 'styles/theme';

export const StyledMobileNavBar = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
  &.with-avatar {
    height: 85px;
  }
  .img-wrapper {
    position: relative;
    transform: translateY(25px);
    img {
      width: 96px;
      height: 96px;
    }
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: -12px;
      left: -12px;
      width: 120px;
      height: 120px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.layoutBG};
    }
  }
  @media ${mqMax(breakpoints.md)} {
    &::after {
      content: '';
      display: block;
      background-color: ${colors.spaceBlue};
      border-radius: 9999px;
      position: fixed;
      width: 70px;
      height: 70px;
      filter: blur(50px);
      left: 50%;
      top: 20px;
      z-index: 0;
    }
  }
`;
