// Route component to display the color palette
import React from 'react';
import { usePalette } from '../hooks/usePalette';

export default function PaletteRoute() {
  const palette = usePalette();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-back)] text-[var(--color-text)]">
      <h1 className="text-3xl font-bold mb-6">Color Palette</h1>
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(palette).map(([name, color]) => (
          <div key={name} className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded shadow-lg border-4 border-[var(--color-edge)]"
              style={{ background: color }}
            />
            <span className="mt-2 text-lg font-mono">{name}</span>
            <span className="text-xs">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
