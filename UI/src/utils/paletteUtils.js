// Utility function to get all palette colors from CSS variables
export function getPaletteColors() {
  const root = document.documentElement;
  return {
    back: getComputedStyle(root).getPropertyValue('--color-back').trim(),
    surface: getComputedStyle(root).getPropertyValue('--color-surface').trim(),
    primary: getComputedStyle(root).getPropertyValue('--color-primary').trim(),
    accent: getComputedStyle(root).getPropertyValue('--color-accent').trim(),
    text: getComputedStyle(root).getPropertyValue('--color-text').trim(),
    edge: getComputedStyle(root).getPropertyValue('--color-edge').trim(),
  };
}
