import { useEffect, useState } from 'react';
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';
import YouTube from 'react-youtube';

import { useAppSelector } from 'hooks/store/useAppSelector';

import FadeInWrapper from 'components/FadeInWrapper';

import { exercisesData } from 'data/exercises';

import { ReactComponent as IconArrowDark } from 'assets/icons/arrow-round-dark.svg';
import { ReactComponent as IconArrow } from 'assets/icons/arrow-round.svg';

import ModalSkip from './ModalSkip';
import RepsWeightInput from './RepsWeightInput';
import { StyledExerciseCard } from './styles';

type ExerciseCardProps = {
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  errors?: FieldErrors<FieldValues>;
  isSkipModalOpen: boolean;
  setIsSkipModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: UseFormReturn['setValue'];
};

export default function ExerciseCard({
  register,
  isSkipModalOpen,
  setIsSkipModalOpen,
  setValue,
}: ExerciseCardProps) {
  const [currentExercise, setCurrentExercise] = useState(0);
  useEffect(() => {
    setValue('exercise', exercisesData[currentExercise][0].title);
  }, [currentExercise, setValue]);

  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);
  return (
    <StyledExerciseCard>
      <ModalSkip
        isOpen={isSkipModalOpen}
        setIsSkipModalOpen={setIsSkipModalOpen}
      />
      <FadeInWrapper animationKey={currentExercise.toString()}>
        <div>
          <input
            type="hidden"
            className="hidden"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('exercise')}
            defaultValue={exercisesData[currentExercise][0].title}
          />
          {exercisesData
            .filter((_, i) => i === currentExercise)
            .map((exercise, i) => (
              <div key={exercise[i].index}>
                <div className="w-full bg-overlay-on-white rounded-full h-[80px] flex items-center justify-between px-3">
                  <div
                    onClick={() => {
                      if (currentExercise === 0) return;
                      setCurrentExercise((prev) => prev - 1);
                      setValue('exercise', exercise[i].title);
                    }}
                    className={`${
                      currentExercise === 0 ? 'opacity-25' : 'cursor-pointer'
                    }`}
                  >
                    {isLightTheme ? <IconArrow /> : <IconArrowDark />}
                  </div>
                  <h2>{exercise[i].title}</h2>
                  <div
                    className={`rotate-180 ${
                      currentExercise === exercisesData.length - 1
                        ? 'opacity-25'
                        : 'cursor-pointer'
                    }`}
                    onClick={() => {
                      if (currentExercise === exercisesData.length - 1) return;
                      setCurrentExercise((prev) => prev + 1);
                    }}
                  >
                    {isLightTheme ? <IconArrow /> : <IconArrowDark />}
                  </div>
                </div>
                <YouTube
                  className="w-full rounded-2xl my-5"
                  videoId={exercise[i].video}
                />
              </div>
            ))}
          <div className="flex flex-col gap-5 mb-10">
            <div className="flex flex-col items-start md:flex-row gap-2 md:gap-6 md:items-center w-full bg-overlay-on-white rounded-[20px] p-5">
              <div className="md:border-solid border-r border-gray-400 py-2 pr-5">
                <h3 className="font-semibold text-base">Set: 1</h3>
              </div>
              <RepsWeightInput isReps />
              <RepsWeightInput />
            </div>
            <div className="flex flex-col items-start md:flex-row gap-2 md:gap-6 md:items-center w-full bg-overlay-on-white rounded-[20px] p-5">
              <div className="md:border-solid border-r border-gray-400 py-2 pr-5">
                <h3 className="font-semibold text-base">Set: 1</h3>
              </div>
              <RepsWeightInput isReps />
              <RepsWeightInput />
            </div>
            <div className="flex flex-col items-start md:flex-row gap-2 md:gap-6 md:items-center w-full bg-overlay-on-white rounded-[20px] p-5">
              <div className="md:border-solid border-r border-gray-400 py-2 pr-5">
                <h3 className="font-semibold text-base">Set: 1</h3>
              </div>
              <RepsWeightInput isReps />
              <RepsWeightInput />
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </StyledExerciseCard>
  );
}
