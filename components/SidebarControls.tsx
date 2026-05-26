import { PartCategory, PartsMap, SelectionState } from '../types/illustration';

const categories: { key: PartCategory; label: string }[] = [
  { key: 'orientation', label: '向き' },{ key: 'job', label: '職種' },{ key: 'gender', label: '性別' },{ key: 'color', label: 'カラー' },
  { key: 'face', label: '顔' },{ key: 'hair', label: '髪型' },{ key: 'body', label: '体' },{ key: 'arms', label: '腕' },{ key: 'legs', label: '足' },
  { key: 'accessory', label: '小物' },{ key: 'background', label: '背景' },{ key: 'vehicle', label: '車両' },
];

export default function SidebarControls({ selectedCategory, onCategoryChange, parts, selection }: { selectedCategory: PartCategory; onCategoryChange: (category: PartCategory) => void; parts: PartsMap; selection: SelectionState }) {
  return (
    <nav className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
      {categories.map(({ key, label }) => (
        <button key={key} className={`w-full rounded px-3 py-2 text-left text-sm ${selectedCategory === key ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'}`} onClick={() => onCategoryChange(key)}>
          <div>{label}</div>
          <div className="text-xs opacity-80">{parts[key].find((p) => p.id === selection[key])?.name ?? '-'}</div>
        </button>
      ))}
    </nav>
  );
}
