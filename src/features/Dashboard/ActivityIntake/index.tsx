import { Link } from 'react-router-dom';

import ProgressBar from 'components/ProgressBar';
import SpaceButton from 'components/SpaceButton';
import SpaceTooltip from 'components/SpaceTooltip';

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg';

import { DashboardComponent } from '../types';
import { StyledActivityIntake } from './styles';

export default function ActivityIntake({ cancel }: DashboardComponent) {
  return (
    <StyledActivityIntake className="flex flex-col h-auto xl:h-full relative">
      <header className="mb-4 flex items-center justify-between relative">
        <div className="p-5 block xl:hidden" onClick={() => cancel?.()}>
          <IconArrow className="arrow-icon" />
        </div>
        <div
          className="text-lg font-semibold  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:relative xl:left-auto
          xl:top-auto xl:transform-none"
        >
          Activity Intake
        </div>
        <SpaceTooltip variant="info-expanded" id="activity-info" offset={15}>
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
      <div className="wrapper rounded-2xl p-4 flex-grow overflow-auto flex flex-col max-w-xl mx-auto w-full  xl:mt-0">
        <ProgressBar value="70" className="mb-2" />
        <div className="flex-grow relative list-wrapper">
          <ul className="relative xl:absolute top-0 left-0 w-full overflow-auto">
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Steps</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
            <li className="flex justify-between items-center mb-0">
              <span className="text-sm">Calories burned</span>
              <span className="text-sm font-semibold">1000</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center">
        <Link to="/survey/pre-workout" className="text-sm">
          <SpaceButton className="btn btn-primary mt-4 w-full">
            Start workout
          </SpaceButton>
        </Link>
      </div>
    </StyledActivityIntake>
  );
}
