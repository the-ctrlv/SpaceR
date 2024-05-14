import {
  Controller,
  FieldErrors,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

import SpaceRadio from 'components/SpaceRadio';

type RadioProps = {
  item: {
    q: string;
    qid: string;
    type?: string;
    options: {
      id: string;
      a: string;
    }[];
  };
  index: number;
  control?: UseFormReturn['control'];
  errors?: FieldErrors<FieldValues>;
  clearErrors: UseFormReturn['clearErrors'];
};

export default function Radio({
  item,
  clearErrors,
  errors,
  index,
  control,
}: RadioProps) {
  return (
    <li className="mb-8 xl:mb-10 relative">
      <h4 className="font-semibold text-base xl:text-lg mb-5">
        {index + 1}. {item.q}
      </h4>
      <div className="flex flex-col">
        {item.options.map((answer: { id: string; a: string }) => (
          <label key={answer.a} className="flex mb-2 last:mb-0 cursor-pointer">
            <Controller
              control={control}
              defaultValue=""
              name={item.qid}
              rules={{ required: 'Please select an answer' }}
              render={({ field }) => (
                <SpaceRadio
                  id={answer.id}
                  name={item.qid}
                  value={answer.id}
                  onChange={() => {
                    field.onChange(answer.a);
                    clearErrors(item.qid);
                  }}
                />
              )}
            />
            <p className="ms-3 w-[calc(100%-30px)] capitalize">{answer.a}</p>
          </label>
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
