import { StyledStepsIndicator } from './styles';

export default function StepsIndicator({
  currentStepIndex,
  prev,
}: {
  currentStepIndex: number;
  prev: () => void;
}) {
  const isActive = (index: number) => {
    return currentStepIndex >= index;
  };
  const isLastStep = currentStepIndex === 3;
  return (
    <StyledStepsIndicator
      className={`flex justify-between items-center absolute -top-8 md:-top-16 w-10/12 left-1/2 -translate-x-1/2
      ${isLastStep ? 'pointer-events-none' : ''}`}
      $step={currentStepIndex}
    >
      <div
        className={`w-4 h-4 rounded-full ${
          isActive(0) ? 'active' : 'bg-slate-200'
        }
        ${isActive(1) ? 'cursor-pointer' : ''}
        `}
        onClick={() => {
          if (isActive(1)) prev();
        }}
      />
      <div
        className={`w-4 h-4 rounded-full ${
          isActive(1) ? 'active' : 'bg-slate-200'
        }
        ${isActive(2) ? 'cursor-pointer' : ''}
        `}
        onClick={() => {
          if (isActive(2)) prev();
        }}
      />
      <div
        className={`w-4 h-4 rounded-full ${
          isActive(2) ? 'active' : 'bg-slate-200'
        }`}
      />
      <div className="w-full h-1 indicator rounded-full bg-slate-200 absolute top-1/2 -translate-y-1/2 -z-10">
        <div className="core" />
      </div>
    </StyledStepsIndicator>
  );
}
