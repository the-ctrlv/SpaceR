import ExerciseCard from 'features/Exercise';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import SpaceButton from 'components/SpaceButton';

import { StyledExercise } from './styles';

export default function Exercise() {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm();
  const [isSkipModalOpen, setIsSkipModalOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };
  const navigate = useNavigate();

  return (
    <StyledExercise className="relative h-auto z-10 flex items-center justify-center">
      <div
        className="w-full h-full max-w-[700px] card"
        style={{ borderRadius: '50px' }}
      >
        <form className="pb-10" onSubmit={handleSubmit(onSubmit)}>
          <ExerciseCard
            isSkipModalOpen={isSkipModalOpen}
            setIsSkipModalOpen={setIsSkipModalOpen}
            register={register}
            errors={errors}
            setValue={setValue}
          />

          <div className="flex flex-col justify-center items-center">
            <SpaceButton
              type="button"
              className="w-full last:mb-0 mb-4"
              onClick={() => {
                trigger().then((isValid) => {
                  if (!isValid) return;
                  navigate('/survey/post-workout');
                });
              }}
            >
              Finish
            </SpaceButton>
            <SpaceButton
              variant="outline"
              className="w-full"
              onClick={() => setIsSkipModalOpen(true)}
            >
              Skip
            </SpaceButton>
          </div>
        </form>
      </div>
    </StyledExercise>
  );
}
