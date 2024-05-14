import { Controller, useForm } from 'react-hook-form';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { StyledModalContent } from './styles';
import { ModalState } from './types';

export default function UpdatePassword({
  setCurrentState,
  cancel,
}: {
  setCurrentState: React.Dispatch<React.SetStateAction<keyof ModalState>>;
  cancel: () => void;
}) {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const watchNewPassword = watch('newPassword', '');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="flex items-center justify-center">
        <h1 className="font-semibold text-lg">Update your password</h1>
      </header>
      <StyledModalContent
        className="w-full md:w-8/12 mx-auto flex-grow px-3 xl:px-0 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <Controller
            control={control}
            name="oldPassword"
            defaultValue="password123"
            rules={{
              required: "This field can't be empty",
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            }}
            render={({ field: { onChange: oldPassOnChange } }) => (
              <SpaceInput
                label="Old password:"
                type="password"
                className={`mb-5 ${errors.oldPassword ? 'invalid' : ''}`}
                onChange={(e) => oldPassOnChange(e.target.value)}
              />
            )}
          />
          {errors.oldPassword && (
            <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
              {errors?.oldPassword?.message?.toString()}
            </span>
          )}
        </div>
        <div className="relative">
          <Controller
            control={control}
            name="newPassword"
            rules={{
              required: "This field can't be empty",
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            }}
            render={({ field: { onChange: newPassOnChange } }) => (
              <SpaceInput
                label="New password:"
                type="password"
                className={`mb-5 ${errors.newPassword ? 'invalid' : ''}`}
                onChange={(e) => newPassOnChange(e.target.value)}
              />
            )}
          />
          {errors.newPassword && (
            <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
              {errors?.newPassword?.message?.toString()}
            </span>
          )}
        </div>

        <div className="relative">
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: "This field can't be empty",
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              validate: (value) =>
                value === watchNewPassword || 'Passwords do not match',
            }}
            render={({ field: { onChange: confirmPassOnChange } }) => (
              <SpaceInput
                label="Confirm password:"
                type="password"
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
        <p className="text-center w-full">
          Forgot your password?
          <span
            className="space-link ms-1"
            onClick={() => setCurrentState('reset')}
          >
            Reset
          </span>
        </p>
      </StyledModalContent>
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-3 mt-3">
        <SpaceButton
          className="w-full"
          onClick={() => {
            setCurrentState('completeUpdate');
          }}
          disabled={!isValid || !isDirty}
          type="submit"
        >
          Reset password
        </SpaceButton>
        <SpaceButton
          className="w-full"
          variant="outline"
          onClick={() => cancel()}
        >
          Cancel
        </SpaceButton>
      </div>
    </>
  );
}
