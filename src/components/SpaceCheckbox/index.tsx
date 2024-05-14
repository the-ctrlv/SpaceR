import { ChangeEvent } from 'react';

import { StyledSpaceCheckbox } from './style';

interface SpaceCheckboxProps {
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  id: string;
  checked?: boolean;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SpaceCheckbox({
  name,
  id,
  checked,
  value,
  defaultChecked,
  className,
  onChange,
}: SpaceCheckboxProps) {
  return (
    <StyledSpaceCheckbox className={className}>
      <input
        defaultChecked={defaultChecked}
        className="space-checkbox"
        type="checkbox"
        id={id}
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <span />
    </StyledSpaceCheckbox>
  );
}
