import { useNavigate } from 'react-router-dom';

import useRoutesConfig from 'hooks/custom/useRouterConfig';

import CurrentDate from 'components/CurrentDate';
import CurrentTime from 'components/CurrentTime';
import SpaceTooltip from 'components/SpaceTooltip';

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg';

import { StyledMobileNavBar } from './style';

export default function MobileHeader({
  user,
  isRootPage,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any;
  isRootPage: boolean;
}) {
  const navigate = useNavigate();
  const { currentRouteName } = useRoutesConfig();

  // eslint-disable-next-line consistent-return
  const getPageTitle = () => {
    if (!isRootPage) {
      switch (currentRouteName) {
        case 'sop':
          return 'SOPs';
        default:
          return 'Page Title';
      }
    }
  };

  return (
    <StyledMobileNavBar className="absolute z-20 w-screen">
      <div
        className={`flex justify-between items-center h-20 p-4 px-0 ${
          isRootPage
            ? 'flex-row-reverse with-avatar bg-content-overlay rounded-b-xl'
            : ''
        }`}
      >
        {isRootPage ? (
          <SpaceTooltip variant="message" id="header-message" className="p-4">
            <div className="flex flex-col cursor-pointer">smth</div>
          </SpaceTooltip>
        ) : (
          <div className="p-5" onClick={() => navigate(-1)}>
            <IconArrow />
          </div>
        )}

        {isRootPage ? (
          <div className="img-wrapper">
            <img
              src={user?.avatar || 'https://i.imgur.com/mD71SmE.png'}
              alt="avatar"
              className="avatar rounded-full block"
            />
          </div>
        ) : (
          <h2 className="text-lg xl:text-3xl font-semibold truncate">
            {getPageTitle()}
          </h2>
        )}
        <SpaceTooltip
          variant="info"
          id="mobile-header-notification"
          className="p-5"
        >
          <div className="p-4">mobile</div>
        </SpaceTooltip>
      </div>
      {isRootPage && (
        <div className="flex w-full justify-between mt-10 gap-2 px-4 md:px-0 max-w-xl lg:max-w-2xl mx-auto">
          <CurrentTime />
          <div
            className="rounded-full bg-content-overlay h-9 flex-grow"
            style={{ maxWidth: '150px' }}
          >
            <CurrentDate />
          </div>
        </div>
      )}
    </StyledMobileNavBar>
  );
}
