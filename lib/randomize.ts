import { PartsMap, SelectionState } from '../types/illustration';

export const randomizeSelections = (
  current: SelectionState,
  parts: PartsMap,
): SelectionState => {
  const next: SelectionState = { ...current };

  Object.entries(parts).forEach(([category, options]) => {
    if (!options.length) return;
    const i = Math.floor(Math.random() * options.length);
    next[category as keyof SelectionState] = options[i].id;
  });

  return next;
};
