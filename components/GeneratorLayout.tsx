'use client';

import { useMemo, useRef, useState } from 'react';
import partsData from '../data/parts.json';
import layoutData from '../data/layout.json';
import presetsData from '../data/presets.json';
import { exportPreviewAsPng, exportPreviewAsSvg } from '../lib/exportImage';
import { randomizeSelections } from '../lib/randomize';
import { PartCategory, PartsMap, Preset, SelectionState } from '../types/illustration';
import ExportButtons from './ExportButtons';
import IllustrationPreview from './IllustrationPreview';
import PartsPanel from './PartsPanel';
import PresetSelector from './PresetSelector';
import SidebarControls from './SidebarControls';

const categories = Object.keys(partsData) as PartCategory[];

const createInitialSelection = (): SelectionState => {
  const initial = {} as SelectionState;
  categories.forEach((c) => (initial[c] = partsData[c][0]?.id ?? null));
  return initial;
};

export default function GeneratorLayout() {
  const [selectedCategory, setSelectedCategory] = useState<PartCategory>('face');
  const [selection, setSelection] = useState<SelectionState>(createInitialSelection);
  const [showGuide, setShowGuide] = useState(true);
  const [backgroundEnabled, setBackgroundEnabled] = useState(true);
  const previewRef = useRef<HTMLDivElement>(null);

  const parts = partsData as PartsMap;
  const presets = presetsData as Preset[];
  const guides = layoutData.guides;
  const colorEnabled = selection.color !== 'color-off';

  const applyPreset = (id: string) => {
    const preset = presets.find((p) => p.id === id);
    if (!preset) return;
    setSelection((prev) => ({ ...prev, ...preset.parts }));
  };

  const handleExport = async (type: 'png' | 'svg') => {
    if (!previewRef.current) return;
    const prevGuide = showGuide;
    setShowGuide(false);
    await new Promise((r) => setTimeout(r, 10));
    if (type === 'png') await exportPreviewAsPng(previewRef.current);
    else await exportPreviewAsSvg(previewRef.current);
    setShowGuide(prevGuide);
  };

  const summary = useMemo(() => `${backgroundEnabled ? '背景あり' : '背景なし'} / ${colorEnabled ? 'カラーあり' : 'モノクロ'}`, [backgroundEnabled, colorEnabled]);

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mb-3 text-lg font-bold">ハコベル イラストジェネレーター（初期実装）</div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 space-y-3">
          <PresetSelector presets={presets} onSelect={applyPreset} />
          <div className="flex gap-2">
            <button className="rounded bg-slate-200 px-2 py-1 text-xs" onClick={() => setBackgroundEnabled((v) => !v)}>背景: {backgroundEnabled ? 'ON' : 'OFF'}</button>
          </div>
          <SidebarControls selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} parts={parts} selection={selection} />
        </div>
        <div className="col-span-6 space-y-3">
          <IllustrationPreview ref={previewRef} parts={parts} selection={selection} guides={guides} showGuide={showGuide} backgroundEnabled={backgroundEnabled} />
          <ExportButtons showGuide={showGuide} onToggleGuide={() => setShowGuide((v) => !v)} onRandom={() => setSelection((prev) => randomizeSelections(prev, parts))} onPng={() => handleExport('png')} onSvg={() => handleExport('svg')} />
          <p className="text-xs text-slate-500">状態: {summary} / 将来の複数人物対応はレイヤー配列化で拡張可能。</p>
        </div>
        <div className="col-span-3">
          <PartsPanel category={selectedCategory} parts={parts} selectedId={selection[selectedCategory]} onSelect={(id) => setSelection((prev) => ({ ...prev, [selectedCategory]: id }))} />
        </div>
      </div>
    </main>
  );
}
