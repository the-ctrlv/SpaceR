import MetricsItem from './MetricsItem';
import { WEAREBLE_METRICS } from './helpers';

export default function WearableMetrics() {
  return (
    <ul className="analysis-data w-full xl:w-5/12 flex flex-wrap justify-between h-auto xxl:h-full mb-4 xxl:mb-0">
      {WEAREBLE_METRICS.map((item) => (
        <MetricsItem item={item} key={item.title} />
      ))}
    </ul>
  );
}
