import Image from "next/image";

import AnimatedSection from "./AnimatedSection";

export default function CarImage({ car }) {
  return (
    <AnimatedSection>

      <div className="relative w-full h-[360px] rounded-2xl overflow-hidden border border-[#E0D9D0]">

        <Image
          src={car.imageUrl}
          alt={car.carName}
          fill
          className="object-cover"
          priority
        />

        {/* Availability */}
        <span
          className={`absolute top-4 right-4 text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full ${
            car.availability === "Available"
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
              : "bg-red-50 text-red-500 border border-red-200"
          }`}
        >
          {car.availability}
        </span>

        {/* Car type */}
        <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#1A0A0A]/60 text-[#F8F5F0] backdrop-blur-sm">
          {car.carType}
        </span>

      </div>

    </AnimatedSection>
  );
}