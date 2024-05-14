// Core
import styled from 'styled-components';

// Import Styles & Assets

export const StyledRepsWeightInput = styled.div`
  display: flex;
  align-items: center;
  input {
    pointer-events: none;
    user-select: none;
    border: none;
    border-radius: 8px;
    margin: 0 15px;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  button {
    margin: 0;
    height: 36px;
    width: 36px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
  }
`;
