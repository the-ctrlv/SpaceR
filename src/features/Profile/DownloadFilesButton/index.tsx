import { useState } from 'react';

import SpaceButton from 'components/SpaceButton';

import { ReactComponent as IconDownload } from 'assets/icons/download.svg';

import ModalDownload from './ModalDownload';

export default function DownloadFilesButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ModalDownload
        isOpen={isModalOpen}
        cancel={() => setIsModalOpen(false)}
      />
      <SpaceButton
        variant="secondary"
        className="xl:fixed xl:bottom-12 xl:right-14 w-full my-5 xl:my-0 block mx-auto mb-40"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex w-full items-center justify-center">
          <IconDownload className="icon-stroke-colored" />
          <span className="block ms-5 text-colored font-medium">
            Download files
          </span>
        </div>
      </SpaceButton>
    </>
  );
}
