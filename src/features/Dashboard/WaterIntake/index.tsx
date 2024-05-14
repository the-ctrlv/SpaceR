import { useState } from 'react';

import SpaceButton from 'components/SpaceButton';
import SpaceTooltip from 'components/SpaceTooltip';

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg';

import { DashboardComponent } from '../types';
import DoughnutChart from './DoughnutChart';
import ModalWaterIntake from './Modal';
import { StyledWaterIntake } from './styles';

export default function WaterIntake({ cancel }: DashboardComponent) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <StyledWaterIntake>
      <ModalWaterIntake
        cancel={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
      <header className="mb-4 flex items-center justify-between relative">
        <div className="p-5 block xl:hidden" onClick={() => cancel?.()}>
          <IconArrow className="arrow-icon" />
        </div>
        <h3
          className="text-lg font-semibold  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:relative xl:left-auto
          xl:top-auto xl:transform-none"
        >
          Water Intake
        </h3>
        <SpaceTooltip variant="info-expanded" id="water-info" offset={15}>
          <header>
            <h4>In space, there is no unlimited access to water.</h4>
          </header>
          <div>
            <p>
              Water is strictly limited on the spaceship, so keep an eye on your
              and your crew's water intake so you don't run out of water during
              the test.
            </p>
          </div>
        </SpaceTooltip>
      </header>
      <div className="wrapper rounded-2xl p-4 max-w-xl mx-auto w-full  xl:mt-0">
        <h4 className="text-lg font-semibold pb-2 mb-2 border-solid border-b border-slate-300">
          My water:
        </h4>
        <div className="flex justify-between items-center w-full">
          <ul>
            <li className="flex items-center">
              <span className="dot" /> <span>Drank today</span>
            </li>
            <li className="flex items-center">
              <span className="dot" />
              <span className="text-md">Total drank</span>
            </li>
            <li className="flex items-center">
              <span className="dot" /> <span>Residual</span>
            </li>
          </ul>
          <div className="h-20 w-20">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <SpaceButton
          className="btn btn-primary mt-4 w-full"
          onClick={() => setIsModalOpen(true)}
        >
          Drink water
        </SpaceButton>
      </div>
    </StyledWaterIntake>
  );
}
