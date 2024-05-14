import { styled } from 'styled-components';
import { colors } from 'styles/theme';

import { ReactComponent as WaterImage } from 'assets/images/water-glass.svg';

export const StyledWaterIntake = styled.div`
  .wrapper {
    background: ${({ theme }) => theme.contentOverlay};
    ul {
      li {
        display: flex;
        align-items: center;
        .dot {
          border-radius: 9999px;
          width: 10px;
          height: 10px;
          margin-right: 8px;
        }
        span {
          font-size: 14px;
          display: block;
          margin-bottom: 5px;
        }
        &:first-child {
          .dot {
            background: ${colors.violet};
          }
        }
        &:nth-child(2) {
          .dot {
            background: #8890ba;
          }
        }
        &:nth-child(3) {
          .dot {
            background: ${colors.spaceBlue};
          }
        }
      }
    }
  }
`;

export const StyledWaterImage = styled(WaterImage)<{
  $modifiedWaterValue: number;
}>`
  g {
    .water {
      transition: transform 0.3s ease-in-out;
      transform: translateY(
        calc(-${(props) => props.$modifiedWaterValue}px - -40%)
      );
    }
  }
`;
