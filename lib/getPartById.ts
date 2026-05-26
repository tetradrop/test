import { PartsMap, PartCategory, PartItem } from '@/types/illustration';

export const getPartById = (
  parts: PartsMap,
  category: PartCategory,
  id: string | null,
): PartItem | undefined => {
  if (!id) return undefined;
  return parts[category]?.find((item) => item.id === id);
};
