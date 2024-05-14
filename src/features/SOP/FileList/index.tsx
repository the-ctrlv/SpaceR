import SpaceCheckbox from 'components/SpaceCheckbox';

import SOPFiles from 'data/SOPFiles.json';

import { ReactComponent as FileIcon } from 'assets/icons/file.svg';

import { StyledFileList } from './styles';

export default function FileList({
  checkedFiles,
  setCheckedFiles,
}: {
  checkedFiles: number[];
  setCheckedFiles: (checkedFiles: number[]) => void;
}) {
  return (
    <StyledFileList className="lg:grid lg:grid-cols-2 gap-5 h-full mb-3 lg:mb-0 rounded-xl">
      {SOPFiles.map((file) => (
        <li
          key={file.id}
          className="w-full bg-content-overlay rounded-2xl shadow-item mb-4 lg:mb-0 last:mb-0"
        >
          <label
            htmlFor={`file-${file.id}`}
            className="h-full flex items-center justify-between py-3 px-2 md:py-6 md:px-5 cursor-pointer"
          >
            <div
              className="flex"
              style={{
                width: 'calc(100% - 40px)',
              }}
            >
              <div className="flex items-center">
                <FileIcon className="me-2 icon-fill-colored" />
              </div>
              <div className="w-[1px] mx-2 md:mx-4 border-solid border-l border-slate-300" />
              <div
                style={{
                  width: 'calc(100% - 80px)',
                }}
              >
                <h3 className="text-md md:text-base font-semibold truncate me-2">
                  {file.title}
                </h3>
                <p className="text-sm md:text-md font-light leading-4 md:leading-5">
                  {file.description}
                </p>
              </div>
            </div>
            <SpaceCheckbox
              id={`file-${file.id}`}
              className="me-2"
              defaultChecked={false}
              onChange={() => {
                setCheckedFiles(
                  checkedFiles.includes(file.id)
                    ? checkedFiles.filter((id) => id !== file.id)
                    : [...checkedFiles, file.id]
                );
              }}
            />
          </label>
        </li>
      ))}
    </StyledFileList>
  );
}
