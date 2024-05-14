import { Controller } from 'react-hook-form';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { FormValues } from '../types';

export default function FirstStep({
  next,
  control,
  errors,
  currentValues,
  trigger,
}: FormValues) {
  return (
    <div className="min-h-[250px]">
      <div className="relative">
        <Controller
          control={control}
          name="firstName"
          rules={{
            required: "This field can't be empty",
            minLength: {
              value: 3,
              message: 'firstName must be at least 3 characters',
            },
          }}
          render={({ field: { onChange: firstNameOnChange } }) => (
            <SpaceInput
              className={`mb-5 w-full ${errors.firstName ? 'invalid' : ''}`}
              defaultValue={currentValues.firstName || ''}
              placeholder="First name"
              onChange={(e) => {
                firstNameOnChange(e.target.value);
              }}
            />
          )}
        />
        {errors.firstName && (
          <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
            {errors?.firstName?.message?.toString()}
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
          name="lastName"
          defaultValue={currentValues.lastName || ''}
          rules={{
            required: "This field can't be empty",
            minLength: {
              value: 3,
              message: 'Last name must be at least 3 characters',
            },
          }}
          render={({ field: { onChange: lastNameOnChange } }) => (
            <SpaceInput
              type="text"
              defaultValue={currentValues.lastName || ''}
              placeholder="Last name"
              className={`mb-5 w-full ${errors.lastName ? 'invalid' : ''}`}
              onChange={(e) => lastNameOnChange(e.target.value)}
            />
          )}
        />
        {errors.lastName && (
          <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
            {errors?.lastName?.message?.toString()}
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
