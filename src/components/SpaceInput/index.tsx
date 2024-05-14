import { ChangeEvent, useRef, useState } from 'react';

import { ReactComponent as IconPassHide } from 'assets/icons/password/hide.svg';
import { ReactComponent as IconPassShow } from 'assets/icons/password/show.svg';

import { StyledLabel, StyledSpaceInput } from './styles';

type SpaceInputProps = {
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  defaultValue?: string;
  titleInput?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function SpaceInput({
  type,
  label,
  className,
  placeholder,
  titleInput,
  defaultValue,
  disabled,
  autoFocus,
  onChange,
  onKeyDown,
}: SpaceInputProps) {
  const additionalClassName = className || '';
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  if (type === 'password') {
    const inputType = showPassword ? 'text' : 'password';
    return (
      <StyledLabel
        className={`relative flex items-center ${additionalClassName}`}
      >
        {label && (
          <span className="block text-sm opacity-70 pe-3">{label}</span>
        )}
        <StyledSpaceInput
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="space-input flex-grow text-base"
          type={inputType}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className="absolute h-full w-full rounded-full left-0 top-0" />
        <div
          className="flex justify-center items-center absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IconPassHide /> : <IconPassShow />}
        </div>
      </StyledLabel>
    );
  }

  if (label) {
    return (
      <StyledLabel
        className={`relative flex items-center ${additionalClassName}`}
      >
        <span className="block text-sm opacity-70 pe-3">{label}</span>
        <StyledSpaceInput
          placeholder={placeholder}
          disabled={disabled}
          ref={inputRef}
          defaultValue={defaultValue}
          className={`space-input flex-grow text-base ${
            disabled ? 'opacity-50' : ''
          }`}
          type={type}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className="absolute h-full w-full rounded-full left-0 top-0" />
      </StyledLabel>
    );
  }

  return (
    <StyledSpaceInput
      placeholder={placeholder}
      disabled={disabled}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      className={`space-input text-base ${additionalClassName} ${
        disabled ? 'opacity-50' : ''
      }, 
      ${titleInput ? 'title-input' : ''}`}
      type={type || 'text'}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
