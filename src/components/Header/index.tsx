import { useRef, useState } from 'react';

import { useClickOutside } from 'hooks/custom/useClickOutside';

import CurrentDate from 'components/CurrentDate';
import SpaceTooltip from 'components/SpaceTooltip';
import ThemeSwitcher from 'components/ThemeSwitcher';

import CurrentTime from '../CurrentTime';
import SpaceSelect from '../SpaceSelect';
import { StyledHeader } from './styles';

interface IHeaderProps {
  user: {
    avatar: string;
  };
}

export default function Header({ user }: IHeaderProps) {
  const [, setCurrentDay] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(false);
  const clickRef = useRef<HTMLDivElement>(null);

  useClickOutside(clickRef, () => visible && setVisible(false));
  const daysOptions = [
    { label: '1 day', value: '1' },
    { label: '2 days', value: '2' },
  ];

  return (
    <StyledHeader className="flex justify-between">
      <div className="flex items-center">
        <ThemeSwitcher />
        <SpaceSelect
          className="ml-7"
          options={daysOptions}
          onChange={(value) => setCurrentDay(Number(value))}
        />
        <div className="ml-7 ">
          <CurrentTime />
        </div>
        <div className="ml-7 ">
          <CurrentDate />
        </div>
      </div>
      <div className="flex items-center">
        <SpaceTooltip
          variant="header-info"
          id="header-notification"
          className="p-4"
        >
          <div>working!</div>
        </SpaceTooltip>
        <SpaceTooltip variant="message" id="header-message" className="p-4">
          <div className="flex flex-col cursor-pointer">smth</div>
        </SpaceTooltip>
        <div
          className="avatar rounded-full w-16 h-16 ms-5"
          style={{
            background: `url(${user.avatar}) no-repeat center center / cover`,
          }}
        />
      </div>
    </StyledHeader>
  );
}
