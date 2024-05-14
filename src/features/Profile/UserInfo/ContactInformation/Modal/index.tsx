import { useEffect, useState } from 'react';

import SpaceModal from 'components/SpaceModal';

import { User } from 'types';

import Complete from './ModalState/Complete';
import Default from './ModalState/Default';
import Reset from './ModalState/ResetPassword';
import UpdatePassword from './ModalState/UpdatePassword';
import { ModalState } from './ModalState/types';

type ModalContactInfoProps = {
  isOpen: boolean;
  cancel: () => void;
  user: User;
};

export default function ModalContactInfo({
  user,
  isOpen,
  cancel,
}: ModalContactInfoProps) {
  const [updatedUser, setUpdatedUser] = useState<User>({
    ...user,
  });
  const [currentState, setCurrentState] = useState<keyof ModalState>('default');

  useEffect(() => {
    setTimeout(() => {
      setCurrentState('default');
    }, 300);
  }, [isOpen]);

  const getCurrentContent = (state: keyof ModalState) => {
    switch (state) {
      case 'default':
        return (
          <Default
            user={user}
            updatedUser={updatedUser}
            setUpdatedUser={setUpdatedUser}
            setCurrentState={setCurrentState}
            cancel={cancel}
          />
        );
      case 'update':
        return (
          <UpdatePassword setCurrentState={setCurrentState} cancel={cancel} />
        );
      case 'reset':
        return <Reset cancel={cancel} setCurrentState={setCurrentState} />;
      case 'completeReset':
        return <Complete cancel={cancel} currentState={currentState} />;
      default:
        return <Complete cancel={cancel} currentState={currentState} />;
    }
  };

  return (
    <SpaceModal isOpen={isOpen} cancel={cancel}>
      {getCurrentContent(currentState)}
    </SpaceModal>
  );
}
