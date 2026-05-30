import { RiCalendarLine, RiMapPinLine, RiUserLine } from "react-icons/ri";

import { TbManualGearbox, TbEngine } from "react-icons/tb";

import AnimatedSection from "./AnimatedSection";

export default function CarInfo({ car }) {
  return (
    <AnimatedSection delay={0.1}>
      <div className="bg-white border border-[#E0D9D0] rounded-2xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">{car.carName}</h1>

            <div className="flex items-center gap-1.5 mt-1">
              <RiMapPinLine size={13} className="text-[#C0392B]" />

              <span className="text-sm text-[#6B6560]">{car.location}</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-3xl font-bold text-[#C0392B]">
              ${car.dailyRentPrice}
            </span>

            <span className="text-sm text-[#6B6560]">/day</span>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-4 border-y border-[#E0D9D0] mb-4">
          {[
            {
              icon: RiCalendarLine,
              label: "Total Bookings",
              value: car.booking_count || 0,
            },
            {
              icon: RiUserLine,
              label: "Seats",
              value: `${car.seats} Person`,
            },
            {
              icon: TbManualGearbox,
              label: "Transmission",
              value: "Automatic",
            },
            {
              icon: TbEngine,
              label: "Engine",
              value: "V8 Turbo",
            },
            {
              icon: RiMapPinLine,
              label: "Pickup",
              value: car.location?.split(",")[0],
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-[#F8F5F0]"
            >
              <Icon size={18} className="text-[#C0392B]" />

              <span className="text-[10px] text-[#6B6560] uppercase tracking-wider">
                {label}
              </span>

              <span className="text-xs font-semibold text-[#1A1A1A]">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div>
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">
            About this car
          </h3>

          <p className="text-sm text-[#6B6560] leading-relaxed">
            {car.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
