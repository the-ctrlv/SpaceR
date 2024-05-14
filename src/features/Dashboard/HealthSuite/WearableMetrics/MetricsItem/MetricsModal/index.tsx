import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';

import SpaceModal from 'components/SpaceModal';
import SpaceSelect from 'components/SpaceSelect';

import LineChart from './LineChart';

type ModalProps = {
  cancel: () => void;
  isOpen: boolean;
  modalTitle: string;
  modalIcon?: string;
};
const options = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
];
export default function MetricsModal({
  cancel,
  isOpen,
  modalTitle,
  modalIcon,
}: ModalProps) {
  const { isMobile } = useWindowDimensions();
  return (
    <SpaceModal isOpen={isOpen} cancel={cancel}>
      <div className="flex flex-col h-full">
        <header
          className="flex w-full flex-wrap items-start justify-between py-3 xl:py-5 px-4 xl:px-7 relative"
          style={{ height: '118px' }}
        >
          <div className="flex xl:mt-3 w-full xl:w-auto justify-center">
            <img src={modalIcon} alt={modalTitle} className="me-2" />
            <h3 className="text-xl font-semibold">{modalTitle}</h3>
          </div>
          <SpaceSelect
            className="xl:mt-2 w-8/12 xl:w-auto mx-auto xl:m-0"
            options={options}
            // eslint-disable-next-line no-console
            onChange={() => console.log('clicked')}
            defaultValue={options[0]}
          />
          <ul className="absolute bottom-0 flex justify-between gap-2 translate-y-2/4 w-11/12">
            <li className="bg-content-overlay w-1/3 rounded-xl py-2 xl:py-5 text-center shadow">
              <p>
                Max: <b>82</b> bpm
              </p>
            </li>
            <li className="bg-content-overlay w-1/3 rounded-xl py-2 xl:py-5 text-center shadow">
              <p>
                Min: <b>82</b> bpm
              </p>
            </li>
            <li className="bg-content-overlay w-1/3 rounded-xl py-2 xl:py-5 text-center shadow">
              <p>
                {isMobile ? 'Avg' : 'Average'}:<b>82</b> bpm
              </p>
            </li>
          </ul>
        </header>
        <div className="flex flex-col justify-center xl:justify-end items-center p-4 xl:p-7 flex-grow">
          <LineChart />
        </div>
      </div>
    </SpaceModal>
  );
}
