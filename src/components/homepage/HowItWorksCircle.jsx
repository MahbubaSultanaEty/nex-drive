"use client";

import { useState } from "react";

export default function HowItWorksCircle({ steps }) {
  const [active, setActive] = useState(0);

  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 155;
  const innerR = 118;
  const dotR = outerR - 2;

  // Position each number around the circle
  const getPos = (index) => {
    const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + dotR * Math.cos(angle),
      y: cy + dotR * Math.sin(angle),
    };
  };

  // Rotation so active step goes to top
  const rotation = -(active / steps.length) * 360;

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Circle */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Outer circle */}
          <circle
            cx={cx}
            cy={cy}
            r={outerR}
            stroke="#E0D9D0"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Inner dashed circle */}
          <circle
            cx={cx}
            cy={cy}
            r={innerR}
            stroke="#C0392B"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            fill="none"
            opacity="0.4"
          />

          {/* Active arc segment */}
          {(() => {
            const startAngle = (active / steps.length) * 2 * Math.PI - Math.PI / 2;
            const endAngle = ((active + 1) / steps.length) * 2 * Math.PI - Math.PI / 2;
            const x1 = cx + outerR * Math.cos(startAngle);
            const y1 = cy + outerR * Math.sin(startAngle);
            const x2 = cx + outerR * Math.cos(endAngle);
            const y2 = cy + outerR * Math.sin(endAngle);
            return (
              <path
                d={`M ${cx} ${cy} L ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} Z`}
                fill="rgba(192,57,43,0.06)"
              />
            );
          })()}

          {/* Number dots */}
          {steps.map((step, i) => {
            const pos = getPos(i);
            const isActive = i === active;
            const counterAngle = -rotation;
            return (
              <g
                key={i}
                style={{
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                  transform: `rotate(${counterAngle}deg)`,
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                }}
                onClick={() => setActive(i)}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 20 : 16}
                  fill={isActive ? "#C0392B" : "#F8F5F0"}
                  stroke={isActive ? "#C0392B" : "#E0D9D0"}
                  strokeWidth="1.5"
                  style={{ transition: "all 0.3s ease" }}
                />
                <text
                  x={pos.x}
                  y={pos.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isActive ? "13" : "12"}
                  fontWeight="600"
                  fill={isActive ? "#fff" : "#6B6560"}
                  style={{ userSelect: "none" }}
                >
                  {step.number}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Center content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-10"
          style={{ pointerEvents: "none" }}
        >
          <span className="text-4xl font-bold text-[#C0392B] mb-2">
            0{steps[active].number}
          </span>
          <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 leading-snug">
            {steps[active].title}
          </h3>
          <p className="text-xs text-[#6B6560] leading-relaxed">
            {steps[active].desc}
          </p>
        </div>
      </div>

      {/* Step indicators below */}
      <div className="flex gap-2">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 h-2 bg-[#C0392B]"
                : "w-2 h-2 bg-[#E0D9D0] hover:bg-[#C0392B]/40"
            }`}
          />
        ))}
      </div>

    </div>
  );
}