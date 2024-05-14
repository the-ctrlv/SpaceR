import { useState } from 'react';
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';

import { useAppSelector } from 'hooks/store/useAppSelector';

type RatingScaleProps = {
  questionIndex: number;
  item: {
    q: string;
    qid: string;
    range?: {
      low: number;
      high: number;
    };
    options: {
      id: string;
      a: string;
    }[];
  };
  errors?: FieldErrors<FieldValues>;
  clearErrors: UseFormReturn['clearErrors'];
  setValue: UseFormReturn['setValue'];
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
};

export default function RatingScale({
  item,
  questionIndex,
  clearErrors,
  register,
  setValue,
  errors,
}: RatingScaleProps) {
  const { isLightTheme } = useAppSelector((state) => state.theme);
  const buttonsQuantity = Array(item.range?.high)
    .fill(1)
    .map((x, y) => x + y);
  const [updatedValue, setUpdatedValue] = useState(0);
  return (
    <li key={item.qid} className="mb-8 xl:mb-10 relative">
      <h4 className="font-semibold text-base xl:text-lg mb-5">
        {questionIndex + 1}. {item.q}
      </h4>
      <div className="flex justify-between w-full gap-1">
        <input
          className="hidden"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(item.qid, {
            required: 'Please select an answer',
          })}
        />
        {buttonsQuantity.map((index) => (
          <div
            key={index}
            className="btn-wrapper w-[10%] cursor-pointer rounded-lg overflow-hidden h-2"
            style={{
              background: isLightTheme
                ? 'rgba(0, 0, 0, 0.05)'
                : 'rgba(255, 255, 255, 0.05)',
            }}
            onClick={() => {
              setUpdatedValue(index);
              setValue(item.qid, index);
              clearErrors(item.qid);
            }}
          >
            <div
              className={`
                ${updatedValue >= index ? 'bg-space-blue w-full h-full' : ''}
              `}
            />
          </div>
        ))}
      </div>
      {errors?.[item.qid] && (
        <p className="validation-error absolute text-red-600 -bottom-5 left-0 text-xs">
          {errors?.[item.qid]?.message as string}
        </p>
      )}
    </li>
  );
}
