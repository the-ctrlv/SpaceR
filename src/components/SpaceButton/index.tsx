import { useAppSelector } from 'hooks/store/useAppSelector';

import { StyledSpaceButton } from './styles';

interface ISpaceButton {
  children: React.ReactNode;
  variant?: 'outline' | 'secondary';
  noMaxWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function SpaceButton({
  children,
  onClick,
  disabled,
  type,
  variant,
  noMaxWidth,
  className,
}: ISpaceButton) {
  const additionalClasses = className === undefined ? '' : className;
  const { isLightTheme } = useAppSelector((state) => state.theme);
  const getBtnStyles = () => {
    switch (variant) {
      case 'outline':
        return 'space-btn--outline';
      case 'secondary':
        return 'space-btn--secondary';
      default:
        return '';
    }
  };
  return (
    <StyledSpaceButton
      className={`space-btn select-none text-white text-center ${
        disabled ? 'pointer-events-none opacity-60' : ''
      } ${
        noMaxWidth ? 'no-max-width' : ''
      } ${getBtnStyles()} ${additionalClasses}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      $isLightTheme={isLightTheme}
    >
      {children}
    </StyledSpaceButton>
  );
}
