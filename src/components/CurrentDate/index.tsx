import moment from 'moment';

import { ReactComponent as IconCalendar } from 'assets/icons/calendar.svg';

import { StyledCurrentDate } from './styles';

export default function CurrentDate() {
  const date: string = moment(new Date()).format('DD/MM/YYYY');
  return (
    <StyledCurrentDate className="current-time items-center justify-center rounded-full px-3 h-9 xl:h-10 flex">
      <IconCalendar />
      <span className="block ml-2">{date}</span>
    </StyledCurrentDate>
  );
}
