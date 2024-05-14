import { Controller, useForm } from 'react-hook-form';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';

import { StyledModalContent } from './styles';
import { ModalState } from './types';

export default function Reset({
  cancel,
  setCurrentState,
}: {
  cancel: () => void;
  setCurrentState: React.Dispatch<React.SetStateAction<keyof ModalState>>;
}) {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  // temporary add any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="flex items-center justify-center">
        <h1 className="font-semibold text-lg">Reset password</h1>
      </header>
      <StyledModalContent
        className="w-full md:w-8/12 mx-auto flex-grow px-3 xl:px-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-center my-5 leading-4">
          We will send you an email so that you can confirm your password reset
          and set a new password.
        </p>
        <div className="relative">
          <Controller
            control={control}
            name="code"
            defaultValue=""
            rules={{
              required: "This field can't be empty",
              minLength: {
                value: 6,
                message: 'Code must be at least 6 characters long',
              },
            }}
            render={({ field: { onChange: codeOnChange } }) => (
              <SpaceInput
                placeholder="Type code here"
                label="Code:"
                className={`mb-5 ${errors.code ? 'invalid' : ''}`}
                onChange={(e) => codeOnChange(e.target.value)}
              />
            )}
          />
          {errors.code && (
            <span className="absolute bottom-1 text-[10px] left-5 text-red-500">
              {errors?.code?.message?.toString()}
            </span>
          )}
        </div>
      </StyledModalContent>
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-3 mt-3">
        <SpaceButton
          className="w-full"
          onClick={() => {
            setCurrentState('completeReset');
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
