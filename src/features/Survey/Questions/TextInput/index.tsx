import {
  Controller,
  FieldErrors,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

import SpaceInput from 'components/SpaceInput';

type TextInputProps = {
  index: number;
  item: {
    q: string;
    qid: string;
  };
  control?: UseFormReturn['control'];
  errors?: FieldErrors<FieldValues>;
  clearErrors: UseFormReturn['clearErrors'];
};
export default function TextInput({
  index,
  errors,
  clearErrors,
  item,
  control,
}: TextInputProps) {
  return (
    <li key={item.qid} className="mb-8 xl:mb-10 relative">
      <h4 className="font-semibold text-base xl:text-lg mb-5">
        {index + 1}. {item.q}
      </h4>
      <Controller
        control={control}
        defaultValue=""
        name={item.qid}
        rules={{ required: 'Please select an answer' }}
        render={({ field: { onChange: textOnChange } }) => (
          <SpaceInput
            type="text"
            onChange={(e) => {
              textOnChange(e.target.value);
              clearErrors(item.qid);
            }}
          />
        )}
      />
      {errors?.[item.qid] && (
        <p className="validation-error absolute text-red-600 -bottom-5 left-0 text-xs">
          {errors?.[item.qid]?.message as string}
        </p>
      )}
    </li>
  );
}
