import SensorData from 'features/Habitat/SensorData';
import SensorStatus from 'features/Habitat/SensorStatus';
import StatusOptions from 'features/Habitat/StatusOptions';
import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';

import SpaceTooltip from 'components/SpaceTooltip';
import Toggler from 'components/Toggler';

import { StyledHabitat } from './styles';

export default function Habitat() {
  const { isTablet } = useWindowDimensions();
  const [isDataVisible, setIsDataVisible] = useState(true);
  return (
    <StyledHabitat
      className={
        'relative bg-card z-10 h-full w-full rounded-2xl px-4 py-5 xl:py-6 xl:px-8 flex ' +
        'flex-wrap xl:flex-nowrap flex-col max-w-xl lg:max-w-2xl mx-auto xl:max-w-none'
      }
    >
      <header
        className="flex w-full justify-between items-center mb-4 xl:mb-8"
        style={{ minHeight: '51px' }}
      >
        <div className="flex items-center flex-grow">
          <h2 className="text-xl font-semibold whitespace-nowrap">
            Habitat Command Center:
          </h2>
          {!isTablet && <StatusOptions />}
        </div>
        <SpaceTooltip variant="info-expanded" id="activity-info" offset={25}>
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
      {isTablet && <Toggler state={isDataVisible} toggler={setIsDataVisible} />}

      <div className="flex flex-wrap justify-between flex-grow gap-5 overflow-auto">
        {isTablet ? (
          <SwitchTransition mode="out-in">
            <CSSTransition
              in={isDataVisible}
              timeout={300}
              classNames="fade"
              key={isDataVisible ? 'data' : 'status'}
            >
              {isDataVisible ? (
                <SensorData />
              ) : (
                <>
                  <StatusOptions />
                  <SensorStatus />
                </>
              )}
            </CSSTransition>
          </SwitchTransition>
        ) : (
          <>
            <SensorData />
            <SensorStatus />
          </>
        )}
      </div>
    </StyledHabitat>
  );
}
