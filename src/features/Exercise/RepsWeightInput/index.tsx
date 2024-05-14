import { useState } from 'react';

import { StyledRepsWeightInput } from './styles';

function RepsWeightInput({ isReps }: { isReps?: boolean }) {
  const [value, setValue] = useState(0);

  return (
    <StyledRepsWeightInput>
      <span className="text-base block mr-5 min-w-[55px]">
        {isReps ? 'Reps:' : 'Weight:'}
      </span>
      <button
        type="button"
        className=" flex items-center justify-center"
        onClick={() => {
          if (value === 0) {
            setValue(0);
          } else {
            setValue(value - 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect width="40" height="40" rx="8" fill="#7191CA" />
          <path
            d="M15 21C14.4477 21 14 20.5523 14 20C14 19.4477 14.4477 19 15 19L25 19C25.5523 19 26 19.4477 26 20C26 20.5523 25.5523 21 25 21L15 21Z"
            fill="white"
          />
        </svg>
      </button>
      <input
        type="number"
        value={value}
        className="h-10 w-10 bg-overlay-on-white font-semibold text-base"
        readOnly
      />
      <button type="button" onClick={() => setValue(value + 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect width="40" height="40" rx="8" fill="#7191CA" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 26C20.5523 26 21 25.5523 21 25L21 21H25C25.5523 21 26 20.5523 26 20C26 19.4477 25.5523 19 25 19H21L21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15L19 19H15C14.4477 19 14 19.4477 14 20C14 20.5523 14.4477 21 15 21H19L19 25C19 25.5523 19.4477 26 20 26Z"
            fill="white"
          />
        </svg>
      </button>
    </StyledRepsWeightInput>
  );
}

export default RepsWeightInput;
