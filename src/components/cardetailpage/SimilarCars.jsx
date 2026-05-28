import Image from "next/image";
import Link from "next/link";

import {
  RiMapPinLine,
} from "react-icons/ri";

import {
  BsArrowRight,
} from "react-icons/bs";

import AnimatedSection from "./AnimatedSection";

export default function SimilarCars({
  similarCars,
}) {
  if (!similarCars?.length) {
    return null;
  }

  return (
    <AnimatedSection delay={0.3}>

      <div className="mt-12">

        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
          Similar <span className="text-[#C0392B]">Cars</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {similarCars.map((car) => (
            <Link
              key={car._id}
              href={`/cars/${car._id}`}
              className="group bg-white border border-[#E0D9D0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#C0392B]/20 transition-all duration-300 no-underline"
            >
              <div className="relative w-full h-36 overflow-hidden">

                <Image
                  src={car.imageUrl}
                  alt={car.carName}
                  fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">

                <div className="flex items-center justify-between mb-1">

                  <h3 className="text-sm font-semibold text-[#1A1A1A] truncate">
                    {car.carName}
                  </h3>

                  <span className="text-sm font-bold text-[#C0392B] shrink-0 ml-2">
                    ${car.dailyRentPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#6B6560]">

                  <RiMapPinLine
                    size={11}
                    className="text-[#C0392B]"
                  />

                  {car.location?.split(",")[0]}
                </div>

                <div className="flex items-center gap-1 mt-3 text-xs text-[#C0392B] font-medium group-hover:gap-2 transition-all duration-200">
                  View Details <BsArrowRight size={11} />
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>

    </AnimatedSection>
  );
}