import MetricsModal from 'features/Dashboard/HealthSuite/WearableMetrics/MetricsItem/MetricsModal';
import { useState } from 'react';

import pulseImg from 'assets/icons/pulse.svg';

type IMetricsItem = {
  item: {
    title: string;
    value: string;
    unit: string;
  };
};

export default function MetricsItem({ item }: IMetricsItem) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <MetricsModal
        isOpen={isModalOpen}
        cancel={() => setIsModalOpen(false)}
        modalTitle={item.title}
        modalIcon={pulseImg}
      />
      <li
        className="bg-content-overlay rounded-xl p-4 xl:p-5 flex flex-col justify-between cursor-pointer"
        key={item.title}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex mb-2">
          <img src={pulseImg} alt="pulse" />
          <h3 className="text-md xl:text-base ms-2 font-semibold whitespace-nowrap truncate">
            {item.title}
          </h3>
        </div>
        <p>
          <span className="font-bold text-xl me-1">{item.value}</span>
          {item.unit}
        </p>
      </li>
    </>
  );
}
