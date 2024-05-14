import StatusDot from 'components/StatusDot';

import sensorStatus from 'data/sensorStatus.json';

export default function SensorStatus() {
  return (
    <ul className="flex-grow overflow-auto">
      {sensorStatus.map((sensor) => (
        <li
          key={sensor.id}
          className="flex bg-content-overlay rounded-xl mb-2 last:mb-0 p-3 lg:p-5"
        >
          <StatusDot status={sensor.status} />
          <p className="text-md font-medium translate-y-[2px]">{sensor.name}</p>
        </li>
      ))}
    </ul>
  );
}
