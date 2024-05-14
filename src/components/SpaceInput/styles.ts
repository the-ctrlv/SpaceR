import styled from 'styled-components';
import { colors } from 'styles/theme';

export const StyledSpaceInput = styled.input`
  border-radius: 100px;
  height: 51px;
  padding: 0 25px;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.insideContentOverlay};
  &.title-input {
    font-size: 20px;
    font-weight: 600;
  }
  &.journal-title {
    border-radius: 8px;
    padding: 0 1rem;
  }
  &[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  &:focus {
    outline: none;
    border: 1px solid ${colors.spaceBlue} !important;
  }
  &.invalid {
    border: 1px solid ${colors.red};
    &:focus {
      border: 1px solid ${colors.red} !important;
    }
  }
`;

export const StyledLabel = styled.label`
  background-color: ${({ theme }) => theme.insideContentOverlay};
  border-radius: 100px;
  padding: 0 25px;
  input {
    padding: 0;
    &:focus {
      border-color: transparent !important;
    }
    &:focus + div {
      border: 1px solid ${colors.spaceBlue} !important;
    }
  }
  &.invalid {
    input {
      &:focus + div {
        border: 1px solid ${colors.red} !important;
      }
    }
    div:first-of-type {
      border: 1px solid ${colors.red};
    }
  }
`;
