export default function ExportButtons({ onPng, onSvg, onRandom, showGuide, onToggleGuide }: { onPng: () => void; onSvg: () => void; onRandom: () => void; showGuide: boolean; onToggleGuide: () => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="rounded bg-slate-800 px-3 py-2 text-xs text-white" onClick={onRandom}>ランダム生成</button>
      <button className="rounded bg-emerald-600 px-3 py-2 text-xs text-white" onClick={onPng}>PNG ダウンロード</button>
      <button className="rounded bg-cyan-600 px-3 py-2 text-xs text-white" onClick={onSvg}>SVG ダウンロード</button>
      <button className="rounded bg-violet-600 px-3 py-2 text-xs text-white" onClick={onToggleGuide}>{showGuide ? 'ガイド非表示' : 'ガイド表示'}</button>
    </div>
  );
}
