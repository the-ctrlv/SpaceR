import Select from 'react-select';
import styled from 'styled-components';
import { breakpoints, mqMax } from 'styles/responsive';

export const StyledSelect = styled(Select)`
  box-shadow: none;
  &.transparent {
    .space-select__control {
      background: transparent;
    }
  }
  .space-select {
    &__control {
      background: ${({ theme }) => theme.contentOverlay};
      border: none;
      box-shadow: none;
      height: 40px;
      border-radius: 100px;
      cursor: pointer;
      min-width: 128px;
    }
    &__value-container {
      padding: 4px 8px 4px 24px;
    }
    &__indicator {
      padding: 8px 14px 8px 4px;
      svg {
        path {
          fill: ${({ theme }) => theme.themeMainColor};
        }
      }
    }
    &__indicator-separator {
      display: none;
    }
    &__placeholder,
    &__single-value {
      color: ${({ theme }) => theme.themeTextColor};
    }
    &__menu {
      background: ${({ theme }) => theme.selectMenuBG};
      border-radius: 20px;
      overflow: hidden;
      z-index: 1080;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      &-list {
        padding: 0;
      }
    }
    &__option {
      color: ${({ theme }) => theme.themeTextColor};
      padding: 8px 24px;
      cursor: pointer;
      &--is-selected {
        background: ${({ theme }) => theme.themeMainColor} !important;
        color: #fff !important;
      }
      &--is-focused,
      &:active {
        color: ${({ theme }) => theme.themeTextColor};
        background: ${({ theme }) => theme.selectOption};
      }
      &:hover {
      }
    }
  }
  @media ${mqMax(breakpoints.xl)} {
    .space-select {
      &__control {
        height: 42px;
      }
      &__menu {
        border-radius: 16px;
      }
      &__option {
        padding: 6px 24px;
        &:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.themeBorder};
        }
      }
    }
  }
`;
