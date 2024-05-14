import { styled } from 'styled-components';
import { breakpoints, mqMin } from 'styles/responsive';

export const StyledBackgroundImage = styled.div`
  .gear-wrapper {
    transition: all 0.5s ease-in-out;
    width: 42px;
    height: 42px;
    div {
      svg {
        transform: rotate(0deg);
        transition: all 0.3s ease-in-out;
      }
    }
    @media ${mqMin(breakpoints.md)} {
      &:hover {
        transition: all 0.3s ease-in-out;
        width: 195px;
        div {
          svg {
            transform: rotate(-180deg);
          }
        }
      }
    }
  }
  @media ${mqMin(breakpoints.tv)} {
    height: 400px;
  }
`;
