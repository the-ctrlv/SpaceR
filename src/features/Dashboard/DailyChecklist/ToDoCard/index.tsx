import React from 'react';

import { useAppSelector } from 'hooks/store';

import statusList from 'data/statusList.json';

import { StyledToDoCard } from '../styles';
import StatusSelect from './StatusSelect';

interface IToDo {
  item: {
    statusLabel: string;
    startAt: string;
    target: string;
    image: string;
    description: string;
    status: string;
  };
}

export default function ToDoCard({ item }: IToDo) {
  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);
  return (
    <StyledToDoCard
      className="mb-6 xl:mb-3 last:mb-0 p-3 h-[220px] md:h-[300px] xl:h-[170px] overflow-hidden relative"
      $isLightTheme={isLightTheme}
      style={{
        background: `url(${item.image}) no-repeat top center / cover`,
      }}
    >
      <StatusSelect
        status={item.status}
        options={statusList.slice(1)}
        defaultValue={statusList.find((status) => status.value === item.status)}
        onChange={() => console.log('asd')}
      />
      <div className="time absolute right-4 top-4 xl:top-3 xl:right-4 text-xs">
        Start at: <span className="font-bold">{item.startAt}</span>
      </div>
      <div className="animated-wrapper absolute left-0 bottom-0 h-4/6 w-full p-3">
        <h4 className="target text-lg md:text-2xl xl:text-base mb-4 md:mb-5 xl:mb-4 font-semibold">
          {item.target}
        </h4>
        <p className="description text-xs md:text-base xl:text-xs text-truncate-multiline-3">
          {item.description}
        </p>
      </div>
    </StyledToDoCard>
  );
}
