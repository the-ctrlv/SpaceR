import FileList from 'features/SOP/FileList';
import { useState } from 'react';

import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';

import SpaceButton from 'components/SpaceButton';

import { StyledSOP } from './styles';

export default function SOP() {
  const [checkedFiles, setCheckedFiles] = useState<number[]>([]);
  const { isMedium } = useWindowDimensions();

  const actionButtons = (
    <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center">
      <SpaceButton
        type="button"
        className="rounded-full px-6 shadow-item mb-2 md:mb-0 md:me-4 w-52"
      >
        Download all
      </SpaceButton>
      <SpaceButton
        variant="outline"
        type="button"
        disabled={checkedFiles.length === 0}
        className="rounded-full py-2 px-4 shadow-item w-52"
      >
        Download{checkedFiles.length > 0 && ` (${checkedFiles.length})`}
      </SpaceButton>
    </div>
  );

  return (
    <StyledSOP className="relative bg-card z-10 h-auto xl:h-full w-full rounded-2xl px-4 py-5 xl:py-6 xl:px-8 xl:flex xl:flex-col">
      {!isMedium && (
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold whitespace-nowrap">
            Standard Operating Procedures
          </h1>
          {actionButtons}
        </header>
      )}
      <FileList checkedFiles={checkedFiles} setCheckedFiles={setCheckedFiles} />
      {isMedium && actionButtons}
    </StyledSOP>
  );
}
