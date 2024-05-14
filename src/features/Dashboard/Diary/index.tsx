import { useState } from 'react';

import SpaceButton from 'components/SpaceButton';
import SpaceTooltip from 'components/SpaceTooltip';

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg';

import { DashboardComponent } from '../types';
import NoteModal from './NoteModal';
import Notes from './Notes';
import { StyledDiary } from './styles';

export default function Diary({ cancel }: DashboardComponent) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NoteModal isOpen={isModalOpen} cancel={() => setIsModalOpen(false)} />
      <StyledDiary className="flex flex-col h-full relative rounded-xl">
        <header className="mb-4 flex items-center justify-between relative">
          <div className="p-5 block xl:hidden" onClick={() => cancel?.()}>
            <IconArrow className="arrow-icon" />
          </div>
          <h3
            className="text-lg font-semibold  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:relative xl:left-auto
          xl:top-auto xl:transform-none"
          >
            Mission Notes
          </h3>
          <SpaceTooltip variant="info-expanded" id="diary-info" offset={15}>
            <header>
              <h4>In space, there is no unlimited access to water.</h4>
            </header>
            <div>
              <p>
                Water is strictly limited on the spaceship, so keep an eye on
                your and your crew's water intake so you don't run out of water
                during the test.
              </p>
            </div>
          </SpaceTooltip>
        </header>
        <div className="relative rounded-xl max-w-3xl mx-auto w-full xl:mt-0 overflow-auto notes-wrapper">
          <Notes />
        </div>
        <div className="flex justify-center absolute w-full bottom-0">
          <SpaceButton
            className="btn btn-primary mt-4 w-full"
            onClick={() => setIsModalOpen(true)}
          >
            New note
          </SpaceButton>
        </div>
      </StyledDiary>
    </>
  );
}
