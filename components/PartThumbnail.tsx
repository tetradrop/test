import { PartItem } from '../types/illustration';
import SafeSvgPart from './SafeSvgPart';

export default function PartThumbnail({ part, selected, onClick }: { part: PartItem; selected: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-lg border p-2 text-left ${selected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-slate-200'}`}>
      <div className="mb-2 h-16 w-full overflow-hidden rounded bg-white">
        <SafeSvgPart src={part.thumbnailPath ?? part.svgPath} alt={part.name} className="h-full w-full object-contain" />
      </div>
      <p className="text-xs">{part.name}</p>
    </button>
  );
}
