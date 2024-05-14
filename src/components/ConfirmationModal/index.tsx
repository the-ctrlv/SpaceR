import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { useClickOutside } from 'hooks/custom/useClickOutside';
import { useAppSelector } from 'hooks/store';

import SpaceButton from 'components/SpaceButton';

import { StyledSpaceModal } from './styles';

interface IConfirmationModalProps {
  cancel: () => void;
  confirm: () => void;
  isOpen: boolean;
  question: string;
}

export default function ConfirmationModal({
  cancel,
  confirm,
  question,
  isOpen,
}: IConfirmationModalProps) {
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useClickOutside(clickOutsideRef, () => {
    cancel();
  });

  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);

  return createPortal(
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
      <StyledSpaceModal
        ref={modalRef}
        $isLightTheme={isLightTheme}
        className={`modal-overlay h-screen w-screen fixed 
  top-0 left-0 flex justify-center items-center z-50`}
      >
        <div
          ref={clickOutsideRef}
          className="modal-container w-11/12 max-w-lg mx-5 xl:mx-0 xl:max-w-xl 
        shadow-lg z-50 overflow-y-auto rounded-2xl relative"
        >
          <div className="h-full flex flex-col relative p-5">
            <h2 className="text-center text-lg lg:text-2xl mb-8 font-bold">
              {question ?? 'Are you sure?'}
            </h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">
              <SpaceButton
                onClick={() => {
                  confirm();
                }}
                className="w-full lg:w-auto"
              >
                Yes
              </SpaceButton>
              <SpaceButton
                variant="outline"
                onClick={() => {
                  cancel();
                }}
                className="w-full lg:w-auto"
              >
                No
              </SpaceButton>
            </div>
          </div>
        </div>
      </StyledSpaceModal>
    </CSSTransition>,
    document.body
  );
}
