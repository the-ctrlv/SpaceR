import { ReactNode } from 'react';
import { routesNames } from 'routes/routes';

import useRoutesConfig from 'hooks/custom/useRouterConfig';
import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';
import { useAppSelector } from 'hooks/store/useAppSelector';

import FadeInWrapper from 'components/FadeInWrapper';
import Header from 'components/Header';
import MobileHeader from 'components/MobileHeader';
import MobileNavBar from 'components/MobileNavBar';
import SideBar from 'components/SideBar';

import { StyledWorkLayout } from './styles';

export default function PrivateLayout({
  children,
  noSideBar,
}: {
  children: ReactNode;
  noSideBar?: boolean;
}) {
  const { isTablet } = useWindowDimensions();
  const { currentRouteName } = useRoutesConfig();
  const isRootPage = [routesNames.dashboard, routesNames.habitat].includes(
    currentRouteName
  );
  const isDashboardPage = currentRouteName === routesNames.dashboard;
  const isSurveyPage =
    currentRouteName === routesNames.activityIntake ||
    currentRouteName === routesNames.survey;
  const isProfilePage = currentRouteName === routesNames.profile;
  const user = useAppSelector((state) => state.user);

  return (
    <StyledWorkLayout className="min-h-screen xl:h-screen w-screen flex">
      {isTablet ? (
        <FadeInWrapper animationKey={currentRouteName}>
          <div className="w-full">
            {!isProfilePage && <MobileHeader isRootPage={isRootPage} />}

            <div
              className={`w-full block overflow-hidden z-10 ${
                // eslint-disable-next-line no-nested-ternary
                isRootPage
                  ? 'py-24 pt-[190px] p-4'
                  : isProfilePage
                  ? 'p-0'
                  : 'pt-20 md:pt-24 pb-24 px-4'
              }`}
            >
              {children}
            </div>
            <MobileNavBar />
          </div>
        </FadeInWrapper>
      ) : (
        <>
          <SideBar noSideBar={noSideBar} />
          <div className="main-wrapper grow min-h-screen relative flex flex-col">
            <Header user={user} />
            <div
              className={`w-full pt-4 pb-7 px-7 content-container 
              ${isDashboardPage ? 'p-4 overflow-auto' : ''}
              ${isProfilePage ? 'overflow-auto h-[calc(100vh-100px)]' : ''}
              ${isSurveyPage ? 'p-4 overflow-auto h-[calc(100vh-100px)]' : ''}
              `}
              style={{
                minHeight: 'calc(100vh - 100px)',
              }}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </StyledWorkLayout>
  );
}
