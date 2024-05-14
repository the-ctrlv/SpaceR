import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import useRoutesConfig from 'hooks/custom/useRouterConfig';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

import { StyledMobileItem } from './styles';

type MobileComponentProps = {
  item: {
    title: string;
    icon: React.FC<{ className?: string }>;
    component: React.FC<{ cancel: () => void }>;
  };
};
export default function MobileComponent({ item }: MobileComponentProps) {
  const [isComponentOpen, setIsComponentOpen] = useState<boolean>(false);
  const DynamicComponent = item.component;
  const DynamicIcon = item.icon;
  const { currentRouteName } = useRoutesConfig();

  useEffect(() => {
    if (isComponentOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isComponentOpen, currentRouteName]);

  return (
    <>
      <StyledMobileItem
        key={item.title}
        onClick={() => setIsComponentOpen(true)}
        className="h-20 flex items-center justify-between rounded-xl bg-content-overlay mb-2 shadow-sm lg:shadow-none"
      >
        <div className="flex items-center justify-center icon-wrapper rounded-l-xl">
          <DynamicIcon
            className={`component-icon ${
              item.title === 'My Diary' && 'filled'
            }`}
          />
        </div>
        <div className="flex-grow flex justify-between items-center ps-4 pe-6">
          <h4 className="text-base font-semibold">{item.title}</h4>
          <ArrowIcon className="arrow-icon rotate-180" />
        </div>
      </StyledMobileItem>
      {createPortal(
        <CSSTransition
          in={isComponentOpen}
          timeout={300}
          classNames="mobile-component"
          unmountOnExit
        >
          <div className="fixed z-30 left-0 top-0 h-screen w-screen bg-layout p-4 pb-32">
            <DynamicComponent cancel={() => setIsComponentOpen(false)} />
          </div>
        </CSSTransition>,
        document.body
      )}
    </>
  );
}
