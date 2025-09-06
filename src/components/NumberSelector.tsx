import { useEffect, useState } from "react";
export default function NumberSelector(props: {
  min: number;
  max: number;
  title: string;
  onValueChanged?: (value: number) => void;
}) {
  const { min, max, title, onValueChanged } = props;

  useEffect(() => {}), [min, max];

  return (
    <div className="flex flex-col items-center space-y-2">
      <h2 className="text-2xl text-amber-300">{title}</h2>
      <select onChange={(e) => onValueChanged?.(parseInt(e.target.value))}>
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
