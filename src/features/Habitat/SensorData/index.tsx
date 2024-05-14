import SpaceTooltip from 'components/SpaceTooltip';

import { sensorData } from 'data/sensorData';

export default function SensorData() {
  return (
    <div className="flex-wrap flex sm:grid grid-cols-2 grid-rows-3 gap-4 w-full xl:w-8/12 xxl:w-7/12 overflow-auto">
      {sensorData.map((sensor) => (
        <div
          key={sensor.id}
          className="flex flex-col justify-between bg-content-overlay rounded-2xl p-3 xxl:p-5 w-full shadow-sm lg:shadow-none"
        >
          <div className="flex justify-between items-center sensor-header rounded-full mb-5 xl:mb-0">
            <div
              className="flex items-center flex-grow"
              style={{
                width: 'calc(100% - 93px)',
              }}
            >
              <div className="bg-space-gradient rounded-full h-12 w-12 flex items-center justify-center">
                <img src={sensor.icon} alt={sensor.title} />
              </div>
              <h2
                className="font-semibold text-base lg:text-sm xxl:text-base whitespace-nowrap truncate ms-3"
                style={{
                  width: 'calc(100% - 55px)',
                }}
              >
                {sensor.title}
              </h2>
            </div>
            <SpaceTooltip
              variant="info-expanded"
              id={`sensor-info-${sensor.id}`}
              className="p-2"
            >
              <div className="flex flex-col cursor-pointer">
                {sensor.description}
              </div>
            </SpaceTooltip>
          </div>
          <h3 className="text-[30px] font-semibold italic">
            {sensor.value}
            <span className="text-base opacity-75 inline-block ms-3 font-medium">
              {sensor.measurementType}
            </span>
          </h3>
        </div>
      ))}
    </div>
  );
}
