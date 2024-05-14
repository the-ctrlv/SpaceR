import { StyledStatusDot } from './styles';

type StatusDotProps = {
  status: string;
};

export default function StatusDot({ status }: StatusDotProps) {
  return (
    <StyledStatusDot
      $randomDelay={Math.random() * 2}
      className={`status-dot relative me-2 status-dot--${status}`}
    >
      <div className="pulsating" />
      <div className="circle" />
    </StyledStatusDot>
  );
}
