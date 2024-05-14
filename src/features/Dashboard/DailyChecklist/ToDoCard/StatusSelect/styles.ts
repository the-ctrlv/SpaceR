import Select from 'react-select';
import styled from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';

import iconEditWhite from 'assets/icons/edit-white.svg';

export const StyledSelect = styled(Select)`
  box-shadow: none;
  z-index: 5;
  max-width: 110px;
  height: 29px;
  .status-select {
    &__control {
      background: transparent;
      border: none;
      box-shadow: none;
      height: 29px;
      border-radius: 100px;
      cursor: pointer;
      min-height: auto;
    }
    &__value-container {
      padding: 4px 8px 4px 12px;
    }
    &__indicator {
      padding: 8px 12px 8px 4px;
      width: 12px;
      height: 12px;
      position: relative;
      svg {
        display: none;
      }
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: url(${iconEditWhite}) no-repeat center center;
        background-size: contain;
        position: absolute;
        left: -8px;
        top: 3px;
        width: 12px;
        height: 12px;
      }
    }
    &__indicator-separator {
      display: none;
    }
    &__placeholder,
    &__single-value {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
    }
    &__menu {
      background: ${({ theme }) => theme.selectMenuBG};
      border-radius: 10px;
      overflow: hidden;
      z-index: 1080;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      &-list {
        padding: 0;
      }
    }
    &__option {
      color: ${({ theme }) => theme.themeTextColor};
      padding: 6px 12px;
      cursor: pointer;
      font-weight: 500;
      &--is-selected {
        background: #ee905a !important;
        color: #fff !important;
      }
      &--is-focused,
      &:active {
        color: ${({ theme }) => theme.themeTextColor};
        background: ${({ theme }) => theme.selectOption};
      }
    }
  }
  &.status {
    z-index: 2;
    &--need-to-do {
      background-color: ${({ theme }) => theme.orange};
    }
    &--done {
      background-color: ${({ theme }) => theme.lightBlue};
      .status-select__option {
        &--is-selected {
          background: ${({ theme }) => theme.lightBlue} !important;
          color: #fff !important;
        }
        &--is-focused,
        &:active {
          background: #7db8e373;
        }
      }
    }
    &--progress {
      background-color: ${({ theme }) => theme.violet};
      .status-select__option {
        &--is-selected {
          background: ${({ theme }) => theme.violet} !important;
          color: #fff !important;
        }
        &--is-focused,
        &:active {
          background: #5e57a587;
        }
      }
    }
    &--overdue {
      background-color: ${({ theme }) => theme.red};
      .status-select__option {
        &--is-selected {
          background: ${({ theme }) => theme.red} !important;
          color: #fff !important;
        }
        &--is-focused,
        &:active {
          background: #c945456e;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.xl)} {
    .status-select {
      &__menu {
        border-radius: 28px;
      }
      &__option {
        padding: 14px 32px;
        &:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.themeBorder};
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    .status-select {
      &__menu {
        border-radius: 16px;
      }
      &__option {
        padding: 12px 16px;
      }
    }
  }
`;
