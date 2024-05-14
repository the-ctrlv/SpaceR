import SpaceButton from 'components/SpaceButton';

import { ReactComponent as IconComplete } from 'assets/icons/complete.svg';

import { ModalState } from './types';

export default function Complete({
  cancel,
  currentState,
}: {
  cancel: () => void;
  currentState: keyof ModalState;
}) {
  return (
    <>
      <header className="flex items-center justify-center">
        <h1 className="font-semibold text-lg">Reset Password</h1>
      </header>
      <div className="w-full md:w-8/12 mx-auto flex-grow px-3 xl:px-0 flex flex-col items-center justify-center">
        <IconComplete className="mx-auto mb-5 h-24 w-24" />
        <p className="text-center leading-4">
          {currentState === 'completeUpdate'
            ? 'Password successfully updated'
            : 'We sent you an email with a link to reset your password.'}
        </p>
      </div>
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-3 mt-3">
        <SpaceButton
          className="w-full"
          onClick={() => {
            cancel();
          }}
          // disabled={!isValid || !isDirty}
          type="submit"
        >
          Ok
        </SpaceButton>
      </div>
    </>
  );
}
