import { Controller } from 'react-hook-form';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { FormValues } from '../types';

export default function SecondStep({
  next,
  control,
  errors,
  trigger,
  currentValues,
}: FormValues) {
  return (
    <div className="min-h-[250px]">
      <div className="relative">
        <Controller
          control={control}
          name="email"
          defaultValue={currentValues.email || ''}
          rules={{
            required: "This field can't be empty",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email address',
            },
          }}
          render={({ field: { onChange: emailOnChange } }) => (
            <SpaceInput
              className={`mb-5 w-full ${errors.email ? 'invalid' : ''}`}
              defaultValue={currentValues.email || ''}
              placeholder="E-mail"
              onChange={(e) => {
                emailOnChange(e.target.value);
              }}
            />
          )}
        />
        {errors.email && (
          <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
            {errors?.email?.message?.toString()}
          </span>
        )}
      </div>
      <div
        className="relative"
        style={{
          minHeight: '71px',
        }}
      >
        <Controller
          control={control}
          name="phone"
          defaultValue={currentValues.phone || ''}
          rules={{
            required: "This field can't be empty",
            pattern: {
              value: /^\d{10}$/,
              message: 'Please enter a valid phone number',
            },
          }}
          render={({ field: { onChange: phoneOnChange } }) => (
            <SpaceInput
              defaultValue={currentValues.phone || ''}
              type="text"
              placeholder="Phone number"
              className={`mb-5 w-full ${errors.phone ? 'invalid' : ''}`}
              onChange={(e) => phoneOnChange(e.target.value)}
            />
          )}
        />
        {errors.phone && (
          <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
            {errors?.phone?.message?.toString()}
          </span>
        )}
      </div>
      <SpaceButton
        noMaxWidth
        type="button"
        className="w-full mb-12"
        onClick={() => {
          trigger().then((isValid) => {
            if (isValid) {
              next();
            }
          });
        }}
      >
        Next
      </SpaceButton>
    </div>
  );
}
