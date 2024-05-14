import { ReactComponent as IconEdit } from 'assets/icons/edit.svg';

import { StyledAnalysisItem } from './styles';

type AnalysisItemProps = {
  item: {
    title: string;
    icon: string;
  };
};
export default function AnalysisItem({ item }: AnalysisItemProps) {
  return (
    <StyledAnalysisItem
      key={item.title}
      className="h-16 flex justify-between rounded-xl items-center px-5 list-none cursor-pointer 
			mb-2 last:mb-0 overflow-hidden bg-content-overlay"
      // eslint-disable-next-line no-console
      onClick={() => console.log('click')}
    >
      <div className="flex">
        <img src={item.icon} alt={item.title} />
        <h4 className="text-base font-semibold ms-3">{item.title}</h4>
      </div>

      <IconEdit />
    </StyledAnalysisItem>
  );
}
