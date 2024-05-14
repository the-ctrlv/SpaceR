import { useState } from 'react';

import SpaceButton from 'components/SpaceButton';
import SpaceModal from 'components/SpaceModal';

import MOCK_FILES from 'data/downloadFiles.json';

import { ReactComponent as IconDownload } from 'assets/icons/download.svg';

import FileItem from './FileItem';

type ModalDownloadFilesProps = {
  isOpen: boolean;
  cancel: () => void;
};

export default function ModalDownloadFiles({
  isOpen,
  cancel,
}: ModalDownloadFilesProps) {
  const [isAllChecked, setIsAllChecked] = useState(false);
  return (
    <SpaceModal isOpen={isOpen} cancel={() => cancel()}>
      <header
        className="flex flex-col items-center justify-center"
        style={{ height: '140px' }}
      >
        <div className="bg-space-gradient h-16 w-16 rounded-full flex items-center justify-center mb-2">
          <IconDownload className="icon-stroke-white" />
        </div>
        <h2 className="text-2xl font-semibold">Download Files</h2>
      </header>
      <ul
        className="flex flex-col w-full px-4 xl:px-0 xl:w-10/12 mx-auto flex-grow h-full overflow-auto py-8"
        style={{
          height: 'calc(100% - 210px)',
        }}
      >
        {MOCK_FILES.map((file) => (
          <FileItem
            key={file.id}
            data={file}
            setIsAllChecked={setIsAllChecked}
            isAllChecked={isAllChecked}
          />
        ))}
      </ul>
      <div className="w-full flex flex-col md:flex-row md:w-11/12 mx-auto items-center justify-center gap-3 mt-3">
        <SpaceButton className="w-full" onClick={() => cancel()}>
          Save
        </SpaceButton>
        <SpaceButton
          className="w-full"
          variant="outline"
          onClick={() => cancel()}
        >
          Cancel
        </SpaceButton>
      </div>
    </SpaceModal>
  );
}
