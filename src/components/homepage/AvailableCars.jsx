import Image from "next/image";
import Link from "next/link";
import { RiMapPinLine, RiUserLine, RiStarLine } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";


export default async function AvailableCars() {
    const res = await fetch("http://localhost:5000/cars");
    const cars = await res.json();
    const availableCars= cars.filter(c=> c.availability === "Available")
  return (
    <section id="cars" className="bg-[#F8F5F0] py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-3">
              Our Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Available <span className="text-[#C0392B]">Cars</span>
            </h2>
          </div>
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C0392B] hover:gap-3 transition-all duration-200 no-underline"
          >
            View All Cars <BsArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCars.map((car) => (
            <div
              key={car._id}
              className="group bg-white border border-[#E0D9D0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#C0392B]/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={car.imageUrl}
                  alt={car.carName}
                  fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Availability badge */}
                <span
                  className={`absolute top-3 right-3 text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                    car.availability === "Available"
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      : "bg-red-50 text-red-500 border border-red-200"
                  }`}
                >
                  {car.availability}
                </span>
                {/* Type badge */}
                <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#1A0A0A]/60 text-[#F8F5F0] backdrop-blur-sm">
                  {car.carType}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Name + Price */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-[#1A1A1A] leading-snug">
                    {car.carName}
                  </h3>
                  <div className="text-right shrink-0 ml-2">
                    <span className="text-lg font-bold text-[#C0392B]">${car.dailyRentPrice}</span>
                    <span className="text-xs text-[#6B6560]">/day</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#6B6560] leading-relaxed mb-4 line-clamp-2">
                  {car.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-5 text-xs text-[#6B6560]">
                  <span className="flex items-center gap-1">
                    <RiUserLine size={13} className="text-[#C0392B]" />
                    {car.seats} Seats
                  </span>
                  <span className="flex items-center gap-1">
                    <TbManualGearbox size={13} className="text-[#C0392B]" />
                    Automatic
                  </span>
                  <span className="flex items-center gap-1 truncate">
                    <RiMapPinLine size={13} className="text-[#C0392B]" />
                    {car.location.split(",")[0]}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/cars/${car._id}`}
                  className={`block w-full text-center text-sm font-medium py-2.5 rounded-xl transition-colors duration-200 no-underline ${
                    car.availability === "Available"
                      ? "bg-[#C0392B] hover:bg-[#922B21] text-white"
                      : "bg-[#F8F5F0] text-[#C4BDB7] border border-[#E0D9D0] cursor-not-allowed pointer-events-none"
                  }`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}