// Custom hook to get the color palette from CSS variables
import { useEffect, useState } from 'react';

export function usePalette() {
  const [palette, setPalette] = useState({});

  useEffect(() => {
    const root = document.documentElement;
    const colors = {
      back: getComputedStyle(root).getPropertyValue('--color-back').trim(),
      surface: getComputedStyle(root).getPropertyValue('--color-surface').trim(),
      primary: getComputedStyle(root).getPropertyValue('--color-primary').trim(),
      accent: getComputedStyle(root).getPropertyValue('--color-accent').trim(),
      text: getComputedStyle(root).getPropertyValue('--color-text').trim(),
      edge: getComputedStyle(root).getPropertyValue('--color-edge').trim(),
    };
    setPalette(colors);
  }, []);

  return palette;
}
