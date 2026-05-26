import { LayoutGuide } from '../types/illustration';

export default function GuideOverlay({ guides }: { guides: LayoutGuide[] }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {guides.map((guide) => (
        <div
          key={guide.id}
          className={`absolute rounded border-2 ${guide.className}`}
          style={{ borderColor: guide.color }}
          title={guide.label}
        />
      ))}
    </div>
  );
}
