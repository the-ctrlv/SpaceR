import { useEffect, useState } from 'react';

import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';
import SpaceModal from 'components/SpaceModal';

import { StyledWaterImage } from '../styles';

type ModalProps = {
  cancel: () => void;
  isOpen: boolean;
};

export default function ModalWaterIntake({ cancel, isOpen }: ModalProps) {
  const [modifiedWaterValue, setModifiedWaterValue] = useState<number>(0);

  useEffect(() => {
    setModifiedWaterValue(0);
  }, [isOpen]);

  return (
    <SpaceModal cancel={cancel} isOpen={isOpen}>
      <header className="flex w-full items-center justify-center">
        <h3 className="text-xl font-semibold">Drink water</h3>
      </header>
      <div className="flex flex-center water-wrapper my-5 flex-grow">
        <StyledWaterImage $modifiedWaterValue={modifiedWaterValue} />
      </div>
      <div className="flex flex-col w-10/12 mx-auto">
        <SpaceInput
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              cancel();
            }
            if (modifiedWaterValue === 0) return;
            if (e.key === 'Enter') {
              cancel();
            }
          }}
          type="number"
          className="space-input w-full"
          placeholder="ml"
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value > 0 && value <= 1000) {
              const percent = (value / 1000) * 100;
              setModifiedWaterValue(percent);
              return;
            }
            if (value > 1000) {
              setModifiedWaterValue(100);
              return;
            }
            if (value === 0 || Number.isNaN(value)) {
              setModifiedWaterValue(0);
            }
          }}
        />
        <div className="w-full flex gap-3 mt-3 justify-center">
          <SpaceButton
            className="w-full"
            disabled={modifiedWaterValue === 0}
            onClick={() => cancel()}
          >
            Save
          </SpaceButton>
          <SpaceButton
            className="w-full"
            variant="outline"
            onClick={() => cancel()}
          >
            Cancel
          </SpaceButton>
        </div>
      </div>
    </SpaceModal>
  );
}
