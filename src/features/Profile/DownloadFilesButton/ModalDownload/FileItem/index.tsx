import { useEffect, useState } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

import SpaceCheckbox from 'components/SpaceCheckbox';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-down.svg';
import { ReactComponent as FileIcon } from 'assets/icons/file.svg';

import { StyledFileItem } from './styles';

type FileItemProps = {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
  setIsAllChecked: (value: boolean) => void;
  isAllChecked: boolean;
};

export default function FileItem({
  data,
  setIsAllChecked,
  isAllChecked,
}: FileItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { title, subtitle, description } = data;
  useEffect(() => {
    if (isAllChecked) {
      setIsChecked(true);
    } else {
      setIsAllChecked(false);
      setIsChecked(false);
    }
  }, [isAllChecked, setIsAllChecked]);
  return (
    <StyledFileItem className="border-solid border-b border-slate-300 pb-4 mb-4 last:border-b-0">
      <div className="flex items-center">
        <SpaceCheckbox
          className="me-3"
          id={title}
          onChange={() => {
            setIsChecked(!isChecked);
            if (title === 'All data') {
              setIsAllChecked(!isAllChecked);
            }
          }}
          checked={isChecked}
        />
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-grow flex justify-between"
        >
          <div className="flex-grow flex justify-between items-center cursor-pointer">
            <FileIcon className="me-2 icon-fill-colored" />
            <div className="flex-grow">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>

          <div
            className={`arrow-wrapper rounded-full h-8 w-8 flex items-center justify-center cursor-pointer
            ms-4 ${isExpanded && 'rotate'}`}
          >
            <ArrowIcon />
          </div>
        </div>
      </div>
      <SlideDown>
        {isExpanded ? <p className="p-3 ps-10 pb-0">{description}</p> : null}
      </SlideDown>
    </StyledFileItem>
  );
}
