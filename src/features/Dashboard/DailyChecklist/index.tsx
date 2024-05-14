import { useEffect, useState } from 'react';

import SpaceSelect from 'components/SpaceSelect';
import SpaceTooltip from 'components/SpaceTooltip';

import { dailyTask } from 'data/dailyTask';
import statusList from 'data/statusList.json';

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg';

import { DashboardComponent } from '../types';
import ToDoCard from './ToDoCard';
import { StyledDailyChecklist } from './styles';

export default function DailyChecklist({ cancel }: DashboardComponent) {
  const [filteredToDo, setFilteredToDo] = useState(dailyTask);
  const [filterTag, setFilterTag] = useState('all');
  useEffect(() => {
    if (filterTag === 'all') {
      setFilteredToDo(dailyTask);
    } else {
      const filtered = dailyTask.filter((item) => item.status === filterTag);
      setFilteredToDo(filtered);
    }
  }, [filterTag]);

  return (
    <StyledDailyChecklist className="flex flex-col h-auto xl:h-full rounded-2xl relative">
      <div>
        <header className="mb-4 flex items-center justify-between relative">
          <div className="p-5 block xl:hidden" onClick={() => cancel?.()}>
            <IconArrow className="arrow-icon" />
          </div>
          <h3
            className="text-lg font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:relative xl:left-auto
          xl:top-auto xl:transform-none"
          >
            Daily Checklist
          </h3>
          <SpaceTooltip
            variant="info-expanded"
            id="checklist-details"
            offset={15}
          >
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
        <SpaceSelect
          className="w-full mb-4 max-w-xl m-auto z-10"
          options={statusList}
          defaultValue={statusList[0]}
          onChange={(value) => setFilterTag(value)}
        />
      </div>
      <div className="overflow-wrapper">
        <ul className="checklist rounded-2xl max-w-xl xl:max-w-none mx-auto w-full  xl:mt-0">
          {filteredToDo.map((item) => (
            <ToDoCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </StyledDailyChecklist>
  );
}
