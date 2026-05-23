"use client";

import { useState } from "react";
import Image from "next/image";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const carImages = [
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80",
    angle: "Front View",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    angle: "Side View",
  },
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=900&q=80",
    angle: "Rear View",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80",
    angle: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900&q=80",
    angle: "Top View",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);

  const prev = () => {
    setDirection("left");
    setCurrent((p) => (p === 0 ? carImages.length - 1 : p - 1));
  };

  const next = () => {
    setDirection("right");
    setCurrent((p) => (p === carImages.length - 1 ? 0 : p + 1));
  };

  return (
    <div className="relative flex flex-col items-center gap-4">

      {/* Main image */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
        <Image
          key={current}
          src={carImages[current].src}
          alt={carImages[current].angle}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />

        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0A]/60 via-transparent to-transparent" />

        {/* Angle label */}
        <span className="absolute bottom-4 left-4 text-xs font-medium tracking-widest uppercase text-[#F8F5F0]/70 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {carImages[current].angle}
        </span>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-[#C0392B] border border-white/10 flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
        >
          <RiArrowLeftLine size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-[#C0392B] border border-white/10 flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
        >
          <RiArrowRightLine size={16} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2">
        {carImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current
                ? "border-[#C0392B] opacity-100"
                : "border-transparent opacity-40 hover:opacity-70"
            }`}
          >
            <Image src={img.src} alt={img.angle} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5">
        {carImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-1.5 bg-[#C0392B]"
                : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}