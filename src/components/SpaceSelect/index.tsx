import { StyledSelect } from './styles';

interface ISpaceSelect {
  options: { label: string; value: string }[];
  defaultValue?: { value: string; label: string };
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  transparent?: boolean;
}

export default function SpaceSelect({
  options,
  placeholder,
  defaultValue,
  onChange,
  className,
  transparent,
}: ISpaceSelect) {
  const additionalClasses = className === undefined ? '' : className;
  return (
    <StyledSelect
      isSearchable={false}
      classNamePrefix="space-select"
      className={`space-select ${additionalClasses} ${
        transparent ? 'transparent' : ''
      }`}
      options={options}
      placeholder={placeholder || 'Select'}
      defaultValue={defaultValue || null}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(value: any) => onChange(value.value)}
    />
  );
}
