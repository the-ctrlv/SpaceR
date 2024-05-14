import styled from 'styled-components';

export const StyledSpaceCheckbox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  position: relative;
  overflow: hidden;
  .space-checkbox {
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
      &:after {
        content: '';
        display: block;
        width: 14px;
        height: 7px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        position: absolute;
        top: 5px;
        left: 4px;
        opacity: 0;
        transform: scale(0, 0);
        transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
      }
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
      }
    }

    &:checked + span {
      &:after {
        opacity: 1;
        transform: scale(1, 1) rotate(-45deg);
      }
      &:before {
        background-color: ${({ theme }) => theme.spaceBlue};
      }
    }
  }
`;
