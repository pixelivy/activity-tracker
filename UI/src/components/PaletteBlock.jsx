// Component to display a single color block
import React from 'react';

export default function PaletteBlock({ name, color }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-24 h-24 rounded shadow-lg border-4 border-edge"
        style={{ background: color }}
      />
      <span className="mt-2 text-lg font-mono">{name}</span>
      <span className="text-xs">{color}</span>
    </div>
  );
}
