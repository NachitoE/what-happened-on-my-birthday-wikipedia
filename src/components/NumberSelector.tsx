import { useEffect, useState } from "react";

export default function NumberSelector(props: {
  min: number;
  max: number;
  title: string;
  onValueChanged?: (value: number) => void;
}) {
  const { min, max, title, onValueChanged } = props;
  const [value, setValue] = useState(min);

  useEffect(() => {}, [min, max]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onValueChanged?.(newValue);
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2
        className="text-2xl font-serif text-amber-800 relative"
        style={{
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          transform: "rotate(-0.3deg)",
        }}
      >
        {title}
      </h2>
      <div className="relative">
        <select
          value={value}
          onChange={handleChange}
          className="appearance-none bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 text-amber-800 font-medium py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-amber-300 cursor-pointer relative z-10"
          style={{
            borderRadius: "8px 6px 10px 5px",
            border: "1px solid rgba(146, 64, 14, 0.3)",
            transform: "rotate(0.2deg)",
            boxShadow:
              "1px 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(217,119,6,0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 60%, rgba(180,83,9,0.03) 0%, transparent 40%)
            `,
          }}
        >
          {Array.from({ length: max - min + 1 }, (_, i) => i + min).map(
            (num) => (
              <option
                key={num}
                value={num}
                className="bg-yellow-50 text-amber-800"
              >
                {num}
              </option>
            )
          )}
        </select>
        {/* Flecha custom vintage */}
        <div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-amber-700"
          style={{ transform: "translateY(-50%) rotate(1deg)" }}
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
