import moment from 'moment';
import { useEffect, useState } from 'react';

import { ReactComponent as IconTime } from 'assets/icons/time.svg';

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<string>(
    moment().format('hh:mm:ss A')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('hh:mm:ss A'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time flex items-center rounded-full pe-0 xl:pe-3 px-3 h-9 xl:h-10 bg-space-gradient">
      <IconTime />
      <span className="block ms-3 text-white" style={{ minWidth: '98px' }}>
        {currentTime}
      </span>
    </div>
  );
}
