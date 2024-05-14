import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { StyledModalSkip } from './styles';

export default function ModalSkip({
  isOpen,
  setIsSkipModalOpen,
}: {
  isOpen: boolean;
  setIsSkipModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleActionClick = () => {
    setIsSkipModalOpen(false);

    navigate('/survey/post-workout');
  };

  return createPortal(
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
      <StyledModalSkip
        ref={modalRef}
        className={`bg-black h-screen w-screen fixed 
  top-0 left-0 flex justify-center items-center z-50`}
      >
        <div
          className="modal-container w-11/12 max-w-lg mx-5 xl:mx-0 xl:max-w-xl 
         z-50 overflow-y-auto relative text-white"
        >
          <h1 className="text-2xl font-semibold text-center mb-8">
            Help us help you by providing your reason for skipping this exercise
          </h1>
          <ul className="w-full">
            <li
              className="text-base rounded-full text-center py-4 mb-3 cursor-pointer"
              onClick={handleActionClick}
            >
              I’m not confident doing this
            </li>
            <li
              className="text-base rounded-full text-center py-4 mb-3 cursor-pointer"
              onClick={handleActionClick}
            >
              I don’t have equipment
            </li>
            <li
              className="text-base rounded-full text-center py-4 mb-3 cursor-pointer"
              onClick={handleActionClick}
            >
              Someone else is using equipment
            </li>
            <li
              className="text-base rounded-full text-center py-4 cursor-pointer"
              onClick={() => setIsSkipModalOpen(false)}
            >
              This movement causes me physical pain
            </li>
          </ul>
        </div>
      </StyledModalSkip>
    </CSSTransition>,
    document.body
  );
}
