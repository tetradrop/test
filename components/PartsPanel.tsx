import { PartCategory, PartsMap } from '../types/illustration';
import PartThumbnail from './PartThumbnail';

export default function PartsPanel({ category, parts, selectedId, onSelect }: { category: PartCategory; parts: PartsMap; selectedId: string | null; onSelect: (id: string) => void }) {
  const list = parts[category] ?? [];

  return (
    <section className="h-full rounded-xl border border-slate-200 bg-white p-3">
      <h2 className="mb-3 text-sm font-semibold">{category} パーツ</h2>
      <div className="grid grid-cols-2 gap-2">
        {list.map((part) => (
          <PartThumbnail key={part.id} part={part} selected={selectedId === part.id} onClick={() => onSelect(part.id)} />
        ))}
      </div>
    </section>
  );
}
