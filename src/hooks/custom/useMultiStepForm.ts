import { useState } from 'react';

import { FormValues } from 'pages/SignUp/types';

export const useMultiStepForm = (
  steps: ((arg: FormValues) => React.ReactElement)[]
) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const next = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };
  const prev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  return {
    currentStep: steps[currentStepIndex],
    steps,
    next,
    prev,
    currentStepIndex,
    isLastStep,
    isFirstStep,
  };
};
