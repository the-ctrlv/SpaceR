import AnalysisItem from './AnalysisItem';
import { analysisList } from './helpers';

export default function Analysis() {
  return (
    <ul className="w-full xl:w-1/4 analysis-action h-auto mb-4 xxl:mb-0">
      {analysisList.map((item) => (
        <AnalysisItem item={item} key={item.title} />
      ))}
    </ul>
  );
}
