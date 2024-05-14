import { Tooltip } from 'react-tooltip';

import { useAppSelector } from 'hooks/store';

import { ReactComponent as IconMessage } from 'assets/icons/message.svg';
import { ReactComponent as IconNotificationRed } from 'assets/icons/notification-red.svg';
import { ReactComponent as IconNotification } from 'assets/icons/notification.svg';

import { StyledTooltip } from './styles';

interface SpaceTooltipProps {
  id: string;
  children: React.ReactNode;
  variant:
    | 'info'
    | 'message'
    | 'info-red'
    | 'info-expanded'
    | 'header-info'
    | 'message-filled';
  className?: string;
  offset?: number;
}

export default function SpaceTooltip({
  id,
  children,
  variant,
  className,
  offset,
}: SpaceTooltipProps) {
  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);

  const getTriggerContent = () => {
    switch (variant) {
      case 'info':
        return <IconNotification className="info" />;
      case 'header-info':
        return <IconNotification className="header-info-icon" />;
      case 'info-red':
        return <IconNotificationRed />;
      case 'info-expanded':
        return (
          <div className="info-expanded flex rounded-full xl:py-1 xl:pe-2 xl:ps-4 items-center">
            <span className="hidden xl:block me-2 text-xs">Info</span>
            <IconNotification className="notification-icon" />
          </div>
        );
      case 'message':
        return <IconMessage className="message-icon icon-fill-colored" />;
      case 'message-filled':
        return <IconMessage className="message-icon icon-stroke-colored" />;
      default:
        return null;
    }
  };

  return (
    <>
      <StyledTooltip
        className={`cursor-pointer ${className || ''}`}
        data-tooltip-id={id}
        data-tooltip-offset={offset || 0}
        data-tooltip-variant={isLightTheme ? 'light' : 'dark'}
      >
        {getTriggerContent()}
      </StyledTooltip>
      <Tooltip id={id} clickable place="bottom">
        <div className="cursor-pointer tooltip-container">{children}</div>
      </Tooltip>
    </>
  );
}
