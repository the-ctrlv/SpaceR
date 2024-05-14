import { StyledProgressBar } from './styles';

export default function ProgressBar({
  value,
  className,
}: {
  value: string;
  className: string;
}) {
  return (
    <StyledProgressBar $value={`${value}%`} className={className}>
      <div className="progress-bar w-full rounded-full relative">
        <div className="progress-bar__fill h-full rounded-full bg-space-gradient" />
      </div>
    </StyledProgressBar>
  );
}
