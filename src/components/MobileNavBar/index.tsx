import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import useRoutesConfig from 'hooks/custom/useRouterConfig';
import { useAppSelector } from 'hooks/store/useAppSelector';

import SpaceSelect from 'components/SpaceSelect';
import ThemeSwitcher from 'components/ThemeSwitcher';

import { ReactComponent as LogoDashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as LogoOpDocs } from 'assets/icons/docs.svg';
import { ReactComponent as LogoEllipsis } from 'assets/icons/ellipsis.svg';
import { ReactComponent as LogoHome } from 'assets/icons/home.svg';
import { ReactComponent as LogoProfile } from 'assets/icons/profile.svg';
import { ReactComponent as LogoSettings } from 'assets/icons/settings.svg';
import { ReactComponent as LogoSignOut } from 'assets/icons/sign-out.svg';

import { StyledMobileNavBar } from './styles';

export default function MobileNavBar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [, setCurrentDay] = useState<number>(1);
  const daysOptions = [
    { label: '1 day', value: '1' },
    { label: '2 days', value: '2' },
  ];
  const { currentRouteName } = useRoutesConfig();
  const { isLightTheme } = useAppSelector((state) => state.theme);

  const clickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsExpanded(false);
  }, [currentRouteName]);

  return (
    <StyledMobileNavBar
      ref={clickRef}
      className="bg-layout absolute z-50 bottom-0 h-[100px]"
    >
      <CSSTransition
        in={isExpanded}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="expanded-menu fixed z-20 flex items-center justify-between flex-col">
          <div className="w-full flex justify-between mb-5">
            <div className="rounded-full shadow-item flex-grow nav-bar-content me-4">
              <SpaceSelect
                className="flex-grow rounded-full"
                options={daysOptions}
                onChange={(value) => setCurrentDay(Number(value))}
              />
            </div>
            <div className="shadow-item rounded-full nav-bar-content">
              <ThemeSwitcher />
            </div>
          </div>
          <div className="nav-bar-content w-full mb-5 rounded-3xl">
            <div className="w-full rounded-3xl link-container shadow-item ">
              <Link to="/sop" className="link-wrapper flex items-center p-5">
                <LogoOpDocs
                  className={currentRouteName === 'sop' ? 'current' : ''}
                />
                <span className="link-title block ms-3">SOPs</span>
              </Link>

              <Link
                to="/settings"
                className="link-wrapper flex items-center p-5"
              >
                <LogoSettings
                  className={currentRouteName === 'settings' ? 'current' : ''}
                />
                <span className="link-title block ms-3">Settings</span>
              </Link>

              <div className="link-wrapper flex items-center p-5 pl-6">
                <LogoSignOut />
                <span className="link-title block ms-3">Log out</span>
              </div>
            </div>
          </div>

          <div className="w-full nav-bar-content rounded-full">
            <button
              type="button"
              className="w-full rounded-full py-2 px-4 shadow-item"
              onClick={() => setIsExpanded(false)}
            >
              Close
            </button>
          </div>
        </div>
      </CSSTransition>
      <nav
        className={`fixed rounded-full flex items-center justify-between py-2 px-5 shadow-item 
        ${!isLightTheme && 'backdrop-blur-md'} ${isExpanded && 'opacity-0'}`}
      >
        <Link to="/" className="link-wrapper flex items-center p-3">
          <LogoHome
            className={currentRouteName === 'dashboard' ? 'current' : ''}
          />
        </Link>

        <Link to="/habitat" className="link-wrapper flex items-center p-3">
          <LogoDashboard
            className={currentRouteName === 'habitat' ? 'current' : ''}
          />
        </Link>

        <Link to="/profile" className="link-wrapper flex items-center p-3">
          <LogoProfile
            className={currentRouteName === 'profile' ? 'current' : ''}
          />
        </Link>

        <div className="p-3" onClick={() => setIsExpanded(true)}>
          <LogoEllipsis />
        </div>
      </nav>
      <CSSTransition
        in={isExpanded}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <div
          className="fixed inset-0 h-screen w-screen bg-black bg-opacity-5 z-10 backdrop-blur-xl"
          onClick={() => setIsExpanded(false)}
        />
      </CSSTransition>
    </StyledMobileNavBar>
  );
}
