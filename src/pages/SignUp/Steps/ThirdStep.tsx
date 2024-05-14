import { Controller } from 'react-hook-form';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { FormValues } from '../types';

export default function ThirdStep({
  next,
  control,
  errors,
  watch,
  trigger,
}: FormValues) {
  const watchConfirmPassword = watch?.('createPassword', '');
  return (
    <div className="min-h-[250px]">
      <div
        className="relative"
        style={{
          minHeight: '71px',
        }}
      >
        <Controller
          control={control}
          name="createPassword"
          defaultValue=""
          rules={{
            required: "This field can't be empty",
            minLength: {
              value: 8,
              message: 'password some error',
            },
          }}
          render={({ field: { onChange: passOnChange } }) => (
            <SpaceInput
              type="password"
              placeholder="Password"
              className={`mb-5 ${errors.createPassword ? 'invalid' : ''}`}
              onChange={(e) => passOnChange(e.target.value)}
            />
          )}
        />
        {errors.createPassword && (
          <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
            {errors?.createPassword?.message?.toString()}
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
          name="confirmPassword"
          defaultValue=""
          rules={{
            required: "This field can't be empty",
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            validate: (value) =>
              value === watchConfirmPassword || 'The passwords do not match',
          }}
          render={({ field: { onChange: confirmPassOnChange } }) => (
            <SpaceInput
              type="password"
              placeholder="Confirm password"
              className={`mb-5 ${errors.confirmPassword ? 'invalid' : ''}`}
              onChange={(e) => confirmPassOnChange(e.target.value)}
            />
          )}
        />
        {errors.confirmPassword && (
          <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
            {errors?.confirmPassword?.message?.toString()}
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
