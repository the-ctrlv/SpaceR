import {
  Controller,
  FieldErrors,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

type TextareaProps = {
  index: number;
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
  control?: UseFormReturn['control'];
};

export default function Textarea({
  item,
  index,
  errors,
  clearErrors,
  control,
}: TextareaProps) {
  return (
    <div key={item.qid} className="mb-8 xl:mb-10 relative">
      <h4 className="font-semibold text-base xl:text-lg mb-5">
        {index + 1}. {item.q}
      </h4>
      <Controller
        control={control}
        defaultValue=""
        name={item.qid}
        rules={{ required: 'Please select an answer' }}
        render={({ field: { onChange: textOnChange } }) => (
          <textarea
            className="h-40 w-full outline-0 bg-inside-content-overlay resize-none rounded-xl p-4"
            placeholder="Write your thoughts here..."
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
    </div>
  );
}
