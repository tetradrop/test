export type PartCategory =
  | 'orientation'
  | 'job'
  | 'gender'
  | 'color'
  | 'face'
  | 'hair'
  | 'body'
  | 'arms'
  | 'legs'
  | 'accessory'
  | 'background'
  | 'vehicle';

export interface PartItem {
  id: string;
  name: string;
  category: PartCategory;
  svgPath?: string;
  thumbnailPath?: string;
  colorable?: boolean;
}

export type PartsMap = Record<PartCategory, PartItem[]>;

export type SelectionState = Record<PartCategory, string | null>;

export interface Preset {
  id: string;
  name: string;
  parts: Partial<SelectionState>;
}

export interface LayoutGuide {
  id: string;
  label: string;
  color: string;
  className: string;
}
