import { useState } from 'react';

import SpaceButton from 'components/SpaceButton';

import { ReactComponent as IconEdit } from 'assets/icons/edit.svg';

import { User } from 'types';

import ModalPersonalInfo from './Modal';

export default function PersonalInformation({ user }: { user: User }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ModalPersonalInfo
        isOpen={isModalOpen}
        cancel={() => setIsModalOpen(false)}
        user={user}
      />
      <div className="pb-10 xl:pb-40">
        <div className="flex justify-between w-full items-center mb-5">
          <h2 className="text-lg font-semibold">Personal information</h2>
          <SpaceButton
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
            className="h-12 w-12 rounded-full flex items-center justify-center"
          >
            <IconEdit className="icon-fill-colored" />
          </SpaceButton>
        </div>
        <div className="card rounded-2xl p-7">
          <div className="flex justify-between items-center border-b border-gray-400 border-solid mb-4 opacity-70">
            <p className="text-base font-medium mb-2">Weight:</p>
            <p className="mb-2 text-base font-medium">{user.weight}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 border-solid mb-4  opacity-70">
            <p className="text-base font-medium mb-2">Height:</p>
            <p className="mb-2 text-base font-medium">{user.height}</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 border-solid mb-4  opacity-70">
            <p className="text-base font-medium mb-2">Age:</p>
            <p className="mb-2 text-base font-medium">{user.age}</p>
          </div>
          <div className="flex justify-between items-center  opacity-70">
            <p className="text-base font-medium mb-2">Country:</p>
            <p className="mb-2 text-base font-medium">{user.country}</p>
          </div>
        </div>
      </div>
    </>
  );
}
