import SpaceTooltip from 'components/SpaceTooltip';

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg';

import { DashboardComponent } from '../types';
import Analysis from './Analysis';
import MentalSurvey from './MentalSurvey';
import WearableMetrics from './WearableMetrics';
import { StyledHealthSuite } from './styles';

export default function HealthSuite({ cancel }: DashboardComponent) {
  return (
    <StyledHealthSuite className="flex flex-col h-auto xl:h-full">
      <header className="mb-4 flex items-center justify-between relative">
        <div className="p-5 block xl:hidden" onClick={() => cancel?.()}>
          <IconArrow className="arrow-icon" />
        </div>
        <h3
          className="text-lg font-semibold  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:relative xl:left-auto
          xl:top-auto xl:transform-none"
        >
          Health Suite
        </h3>
        <div className="flex items-center">
          <SpaceTooltip
            variant="info-red"
            id="health-notification"
            className="p-1 me-2"
          >
            <div>working!</div>
          </SpaceTooltip>
          <SpaceTooltip variant="info-expanded" id="health-details" offset={15}>
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
        </div>
      </header>

      <div className="dashboard-content-wrapper no-scroll lg:overflow-hidden block xl:flex flex-col xl:flex-row gap-4 flex-grow max-w-xl xl:max-w-none mx-auto w-full  xl:mt-0">
        <Analysis />
        <WearableMetrics />
        <MentalSurvey />
      </div>
    </StyledHealthSuite>
  );
}
