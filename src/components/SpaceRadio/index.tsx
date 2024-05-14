import { ChangeEvent } from 'react';

import { StyledSpaceRadio } from './style';

interface SpaceRadioProps {
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  id: string;
  checked?: boolean;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SpaceRadio({
  name,
  id,
  checked,
  value,
  defaultChecked,
  className,
  onChange,
}: SpaceRadioProps) {
  return (
    <StyledSpaceRadio className={className}>
      <input
        defaultChecked={defaultChecked}
        className="space-radio"
        type="radio"
        id={id}
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <span />
    </StyledSpaceRadio>
  );
}
