import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';

import Radio from './Radio';
import RatingScale from './RatingScale';
import TextInput from './TextInput';
import Textarea from './Textarea';

type QuestionProps = {
  data: {
    qid: string;
    q: string;
    type: string;
    options: {
      id: string;
      a: string;
    }[];
  }[];
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  control?: UseFormReturn['control'];
  errors?: FieldErrors<FieldValues>;
  setValue: UseFormReturn['setValue'];
  clearErrors: UseFormReturn['clearErrors'];
};

export default function Questions({
  data,
  register,
  control,
  errors,
  setValue,
  clearErrors,
}: QuestionProps) {
  const surveyPageLink = window.location.pathname.split('/').pop();

  const surveyTitle = () => {
    switch (surveyPageLink) {
      case 'daily-survey':
        return 'Daily Survey';
      case 'pre-workout':
        return 'Pre Workout Survey';
      case 'post-workout':
        return 'Post Workout Survey';
      default:
        return null;
    }
  };

  const renderSurvey = data.map((item, i) => {
    switch (item.type) {
      case 'radio':
      case 'multichoice':
        return (
          <Radio
            index={i}
            key={item.qid}
            item={item}
            control={control}
            errors={errors}
            clearErrors={clearErrors}
          />
        );

      case 'text':
        return (
          <TextInput
            key={item.qid}
            item={item}
            control={control}
            index={i}
            errors={errors}
            clearErrors={clearErrors}
          />
        );
      case 'textarea':
        return (
          <Textarea
            control={control}
            key={item.qid}
            item={item}
            index={i}
            clearErrors={clearErrors}
            errors={errors}
          />
        );
      case 'int_range':
        return (
          <RatingScale
            key={item.qid}
            item={item}
            questionIndex={i}
            register={register}
            clearErrors={clearErrors}
            errors={errors}
            setValue={setValue}
          />
        );
      default:
        return <div key={item.qid} />;
    }
  });

  return (
    <>
      <div className="w-full rounded-full py-6 xl:py-8 mb-4 xl:mb-12 bg-overlay-on-white">
        <h3 className="text-xl xl:text-2xl font-semibold text-center">
          {surveyTitle()}
        </h3>
      </div>
      <ul className="px-2 md:px-8">{renderSurvey}</ul>
    </>
  );
}
