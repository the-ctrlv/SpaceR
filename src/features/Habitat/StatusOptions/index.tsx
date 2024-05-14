import { useEffect, useState } from 'react';

import { useWindowResize } from 'hooks/custom/useWindowResize';

import StatusDot from 'components/StatusDot';

import statusOptions from 'data/statusOptions.json';

export default function StatusOptions() {
  const { width } = useWindowResize();
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  useEffect(() => {
    setIsSmallDesktop(width > 1025 && width < 1280);
  }, [width]);
  return (
    <ul className="flex flex-col sm:justify-between md:justify-start xl:flex-row w-full sm:my-4 md:my-0 xl:ms-10">
      {statusOptions.map((status) => (
        <li key={status.status} className="flex me-6 last:me-0">
          <StatusDot status={status.status} />
          <p className="text-md font-medium translate-y-[2px]">
            {isSmallDesktop ? status.short_description : status.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
