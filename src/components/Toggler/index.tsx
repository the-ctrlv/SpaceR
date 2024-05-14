export default function Toggler({
  toggler,
  state,
}: {
  toggler: (state: boolean) => void;
  state: boolean;
}) {
  return (
    <div className="toggler flex w-full gap-3 mb-5 bg-card h-12 rounded-full overflow-hidden relative">
      <button
        type="button"
        className={`flex items-center justify-center text-base rounded-full w-6/12 h-full relative z-10 font-semibold ' +
        ${state && 'text-white'}`}
        onClick={() => toggler(true)}
      >
        Sensor Data
      </button>
      <button
        type="button"
        className={`flex items-center justify-center text-base rounded-full h-full w-6/12 relative z-10 font-semibold ' +
        ${!state && 'text-white'}`}
        onClick={() => toggler(false)}
      >
        Sensor Status
      </button>
      <div
        className={`toggler-indicator absolute top-0 left-0 h-full w-6/12 bg-space-gradient rounded-full transition-transform duration-800 transform,
        ${state ? 'translate-x-0' : 'translate-x-full'}`}
      />
    </div>
  );
}
