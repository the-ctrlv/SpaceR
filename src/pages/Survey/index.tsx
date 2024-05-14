import Questions from 'features/Survey/Questions';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import SpaceButton from 'components/SpaceButton';

import mentalSurvey from 'data/mentalSurvey.json';
import postWorkoutSurvey from 'data/postWorkoutSurvey.json';
import preWorkoutSurvey from 'data/preWorkoutSurvey.json';

import { StyledSurvey } from './styles';

export default function Survey() {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm();

  const surveyPageLink = window.location.pathname.split('/').pop();

  const currentSurvey = () => {
    switch (surveyPageLink) {
      case 'daily-survey':
        return mentalSurvey;
      case 'pre-workout':
        return preWorkoutSurvey;
      case 'post-workout':
        return postWorkoutSurvey;
      default:
        return null;
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };
  const navigate = useNavigate();

  return (
    !!currentSurvey() && (
      <StyledSurvey className="relative h-auto z-10 flex items-center justify-center">
        <div
          className="w-full h-full max-w-[700px] card"
          style={{ borderRadius: '50px' }}
        >
          <form className="pb-10" onSubmit={handleSubmit(onSubmit)}>
            <Questions
              data={currentSurvey() as never[]}
              register={register}
              errors={errors}
              clearErrors={clearErrors}
              control={control}
              setValue={setValue}
            />
            <div className="flex flex-col justify-center items-center">
              <SpaceButton
                type="button"
                className="w-full last:mb-0 mb-4"
                onClick={() => {
                  trigger().then((isValid) => {
                    if (!isValid) return;
                    navigate(
                      surveyPageLink === 'pre-workout'
                        ? '/exercise/example'
                        : '/'
                    );
                  });
                }}
              >
                Finish
              </SpaceButton>
            </div>
          </form>
        </div>
      </StyledSurvey>
    )
  );
}
