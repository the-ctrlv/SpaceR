import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useMultiStepForm } from 'hooks/custom/useMultiStepForm';

import FadeInWrapper from 'components/FadeInWrapper';

import CompleteStep from './Steps/CompleteStep';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import StepsIndicator from './StepsIndicator';
import { StyledSignUp } from './styles';

export default function SignUp() {
  const components = [FirstStep, SecondStep, ThirdStep, CompleteStep];
  const { next, prev, isLastStep, currentStepIndex } =
    useMultiStepForm(components);
  const DynamicStepComponent = components[currentStepIndex];

  const {
    handleSubmit,
    control,
    trigger,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const currentValues = getValues();

  // temporary add any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <StyledSignUp
      onSubmit={handleSubmit(onSubmit)}
      className="h-full w-full items-center flex flex-col justify-start md:justify-center px-5 pt-16 md:pt-0"
    >
      <div
        className="w-full max-w-[440px] text-center relative"
        style={{
          minHeight: '320px',
        }}
      >
        {!isLastStep && (
          <FadeInWrapper animationKey={isLastStep ? 'last' : 'not-last'}>
            <StepsIndicator currentStepIndex={currentStepIndex} prev={prev} />
          </FadeInWrapper>
        )}
        <h1 className="text-[28px] font-semibold mb-4">Join Space Redi</h1>
        <div className="w-full relative h-full">
          <FadeInWrapper animationKey={currentStepIndex.toString()}>
            <DynamicStepComponent
              next={next}
              trigger={trigger}
              currentValues={currentValues}
              control={control}
              currentStepIndex={currentStepIndex}
              errors={errors}
              watch={watch}
            />
          </FadeInWrapper>
        </div>
      </div>
      <div className="absolute bottom-8 md:bottom-36 left-0 text-center w-full">
        <p className="">
          Already have an account?{' '}
          <Link to="/login" className="space-link">
            Log in
          </Link>
        </p>
      </div>
    </StyledSignUp>
  );
}
