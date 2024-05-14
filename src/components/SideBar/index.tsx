import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useClickOutside } from 'hooks/custom/useClickOutside';
import useRoutesConfig from 'hooks/custom/useRouterConfig';

import { ReactComponent as LogoDashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as LogoOpDocs } from 'assets/icons/docs.svg';
import { ReactComponent as LogoHome } from 'assets/icons/home.svg';
import { ReactComponent as LogoProfile } from 'assets/icons/profile.svg';
import { ReactComponent as LogoSettings } from 'assets/icons/settings.svg';

import { StyledSideBar } from './styles';

export default function SideBar({ noSideBar }: { noSideBar?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentRouteName } = useRoutesConfig();
  const clickRef = useRef<HTMLDivElement>(null);

  useClickOutside(clickRef, () => setIsExpanded(false));

  useEffect(() => {
    setIsExpanded(false);
  }, [currentRouteName]);

  return (
    <StyledSideBar
      className={`side-bar h-screen relative transition-all duration-300 ${
        noSideBar
          ? 'opacity-0 pointer-events-none'
          : 'opacity-1 pointer-events-auto'
      }`}
    >
      <div
        ref={clickRef}
        className={`
        ${
          isExpanded ? 'expanded' : ''
        } ghost-side-bar flex flex-col p-[28px] h-screen absolute z-50`}
      >
        <div
          className="hamburger-wrapper flex items-center mb-[12vh] relative"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div
            className={`hamburger cursor-pointer p-3 flex items-center justify-between flex-col ${
              isExpanded && 'active'
            }`}
          >
            <span className="hamburger__line rounded hamburger-menu__line--1" />
            <span className="hamburger__line rounded hamburger-menu__line--2" />
            <span className="hamburger__line rounded hamburger-menu__line--3" />
          </div>
          <span className="link-title block ms-3">Menu</span>
        </div>
        <div className="side-bar__content">
          <Link to="/" className="link-wrapper flex items-center p-3 mb-[14px]">
            <LogoHome
              className={currentRouteName === 'dashboard' ? 'current' : ''}
            />
            <span className="link-title block ms-3">Dashboard</span>
          </Link>

          <Link
            to="/habitat"
            className="link-wrapper flex items-center p-3 mb-[14px]"
          >
            <LogoDashboard
              className={currentRouteName === 'habitat' ? 'current' : ''}
            />
            <span className="link-title block ms-3">Habitat</span>
          </Link>

          <Link
            to="/profile"
            className="link-wrapper flex items-center p-3 mb-[14px]"
          >
            <LogoProfile
              className={currentRouteName === 'profile' ? 'current' : ''}
            />
            <span className="link-title block ms-3">Profile</span>
          </Link>

          <Link
            to="/sop"
            className="link-wrapper flex items-center p-3 mb-[14px]"
          >
            <LogoOpDocs
              className={currentRouteName === 'sop' ? 'current' : ''}
            />
            <span className="link-title block ms-3">SOPs</span>
          </Link>

          <Link
            to="/settings"
            className="link-wrapper flex items-center p-3 mb-[14px]"
          >
            <LogoSettings
              className={currentRouteName === 'settings' ? 'current' : ''}
            />
            <span className="link-title block ms-3">Settings</span>
          </Link>
        </div>
      </div>
    </StyledSideBar>
  );
}
