import { forwardRef } from 'react';
import { LayoutGuide, PartCategory, PartsMap, SelectionState } from '../types/illustration';
import GuideOverlay from './GuideOverlay';
import SafeSvgPart from './SafeSvgPart';

const layerOrder: PartCategory[] = ['background', 'vehicle', 'body', 'legs', 'arms', 'face', 'hair', 'accessory'];

const IllustrationPreview = forwardRef<HTMLDivElement, { parts: PartsMap; selection: SelectionState; guides: LayoutGuide[]; showGuide: boolean; backgroundEnabled: boolean }>(({ parts, selection, guides, showGuide, backgroundEnabled }, ref) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="relative mx-auto aspect-square max-w-[520px] overflow-hidden rounded-lg bg-slate-50" ref={ref}>
        {layerOrder.map((category) => {
          if (!backgroundEnabled && category === 'background') return null;
          const selected = parts[category].find((item) => item.id === selection[category]);
          return (
            <div key={category} className="absolute inset-0 p-6">
              <SafeSvgPart src={selected?.svgPath} alt={`${category} part`} className="h-full w-full object-contain" />
            </div>
          );
        })}
        {showGuide && <GuideOverlay guides={guides} />}
      </div>
    </div>
  );
});

IllustrationPreview.displayName = 'IllustrationPreview';
export default IllustrationPreview;
