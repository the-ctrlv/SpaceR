import { useRef } from 'react';

import SpaceButton from 'components/SpaceButton';
import SpaceModal from 'components/SpaceModal';

import ImageDocs from 'assets/icons/docs.png';
import { ReactComponent as IconUpload } from 'assets/icons/upload.svg';

type ModalUploadProps = {
  isOpen: boolean;
  cancel: () => void;
};

export default function ModalUpload({ isOpen, cancel }: ModalUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <SpaceModal isOpen={isOpen} cancel={() => cancel()}>
      <div className="flex flex-col w-full px-2 xl:px-0 xl:w-11/12 mx-auto flex-grow h-full overflow-auto py-8">
        <div className="bg-space-gradient h-16 w-16 rounded-full flex items-center justify-center mb-2 mt-10 mx-auto">
          <IconUpload className="icon-stroke-white" />
        </div>
        <h2 className="text-xl xl:text-2xl font-semibold text-center">
          Upload your file
        </h2>

        <div className="bg-inside-content-overlay rounded-xl w-11/12 mx-auto mt-10 h-72 relative px-3">
          <div className="flex flex-col items-center justify-center">
            <img
              src={ImageDocs}
              alt="docs"
              className="mx-auto mb-5 mt-20 h-12"
            />
            <p className="text-[10px] xl:text-base">
              Drag and drop files here or browse your computer
            </p>
          </div>
          <div
            className="absolute left-4 top-4 border border-gray-400 border-dashed rounded-xl"
            style={{
              height: 'calc(100% - 2rem)',
              width: 'calc(100% - 2rem)',
            }}
          />
          <input type="file" className="hidden" ref={inputRef} />
          <SpaceButton
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8/12 xl:w-full h-full"
            onClick={() => inputRef.current?.click()}
          >
            Upload file
          </SpaceButton>
        </div>
      </div>
    </SpaceModal>
  );
}
