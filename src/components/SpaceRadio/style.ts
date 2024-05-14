import styled from 'styled-components';

export const StyledSpaceRadio = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  position: relative;
  overflow: hidden;
  .space-radio {
    opacity: 0;
    position: absolute;
    z-index: 1;
    width: 22px;
    height: 22px;
    cursor: pointer;
    & + span {
      display: inline-block;
      position: relative;
      height: 22px;
      width: 22px;
      font-weight: 500;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 4px;
        width: 22px;
        height: 22px;
        background-color: ${({ theme }) => theme.checkboxBG};
        border-radius: 100%;
      }
      &:after {
        content: '';
        display: block;
        width: 9px;
        height: 9px;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 100%;
        transform: translate3d(-50%, -50%, 0);
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
        background-color: #fff;
      }
    }
    &:checked + span {
      &:after {
        opacity: 1;
        transform: translate3d(-50%, -50%, 0);
      }
      &:before {
        background-color: ${({ theme }) => theme.spaceBlue};
      }
    }
  }
`;
