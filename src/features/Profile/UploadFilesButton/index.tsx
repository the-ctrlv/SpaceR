import { useState } from 'react';

import SpaceButton from 'components/SpaceButton';

import { ReactComponent as IconUpload } from 'assets/icons/upload.svg';

import ModalUpload from './ModalUpload';

export default function UploadFilesButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ModalUpload isOpen={isModalOpen} cancel={() => setIsModalOpen(false)} />
      <SpaceButton
        variant="secondary"
        className="xl:fixed xl:bottom-12 xl:left-40 w-full my-5 xl:my-0 block mx-auto"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex w-full items-center justify-center">
          <IconUpload className="icon-stroke-colored" />
          <span className="block ms-5 text-colored font-medium">
            Upload files
          </span>
        </div>
      </SpaceButton>
    </>
  );
}
