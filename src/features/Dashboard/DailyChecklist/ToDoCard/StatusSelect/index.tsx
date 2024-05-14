import { useState } from 'react';

import { StyledSelect } from './styles';

interface ISpaceSelect {
  options: { label: string; value: string }[];
  defaultValue?: { value: string; label: string };
  onChange: (value: string) => void;
  placeholder?: string;
  status: string;
}

export default function StatusSelect({
  options,
  placeholder,
  defaultValue,
  onChange,
  status,
}: ISpaceSelect) {
  const [selectStatus, setSelectStatus] = useState(status);
  return (
    <StyledSelect
      isSearchable={false}
      classNamePrefix="status-select"
      className={`status--${selectStatus} absolute left-0 top-0 text-xs rounded-2xl`}
      options={options}
      placeholder={placeholder || 'Select'}
      defaultValue={defaultValue || null}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(value: any) => {
        onChange(value.value);
        setSelectStatus(value.value);
      }}
    />
  );
}
