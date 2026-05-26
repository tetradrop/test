import { Preset } from '../types/illustration';

export default function PresetSelector({ presets, onSelect }: { presets: Preset[]; onSelect: (id: string) => void }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold">プリセット</label>
      <select onChange={(e) => onSelect(e.target.value)} className="w-full rounded border border-slate-300 px-2 py-1 text-sm">
        {presets.map((preset) => (
          <option key={preset.id} value={preset.id}>{preset.name}</option>
        ))}
      </select>
    </div>
  );
}
