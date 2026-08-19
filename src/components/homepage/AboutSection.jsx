import Image from "next/image";
import { RiMapPinLine, RiUserStarLine, RiShieldCheckLine, RiArrowUpLine } from "react-icons/ri";

export default function AboutSection() {
  return (
    <section className="bg-[#F8F5F0] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
            One platform for all <br /> your driving needs
          </h2>
          <p className="text-sm text-[#6B6560] max-w-md mx-auto leading-relaxed">
            Remove all the friction that stands between you and the perfect ride — book, drive, and return with ease.
          </p>
        </div>

        {/* Two column bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left card — Stats */}
          <div className="bg-[#1A0A0A] rounded-3xl p-8 flex flex-col justify-between min-h-[340px] relative overflow-hidden">

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(#C0392B 1px, transparent 1px), linear-gradient(90deg, #C0392B 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#F8F5F0] leading-snug mb-2">
                Book your ride <br /> faster than ever
              </h3>
              <p className="text-xs text-[#F8F5F0]/40">Average booking time</p>
              <p className="text-4xl font-black text-[#C0392B] mt-1">2 mins</p>
            </div>

            {/* Bar chart */}
            <div className="relative z-10 flex items-end gap-2 mt-6">
              {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md"
                    style={{
                      height: `${h * 0.8}px`,
                      background: i === 6 ? "#C0392B" : "rgba(248,245,240,0.12)",
                    }}
                  />
                </div>
              ))}
              {/* Arrow */}
              <div className="absolute -top-2 right-2 text-[#C0392B]">
                <RiArrowUpLine size={28} />
              </div>
            </div>

            {/* Stats row */}
            <div className="relative z-10 flex gap-6 mt-4 pt-4 border-t border-white/10">
              {[
                { value: "500+", label: "Vehicles" },
                { value: "4.9★", label: "Rating" },
                { value: "10k+", label: "Bookings" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-base font-bold text-[#F8F5F0]">{value}</p>
                  <p className="text-[10px] text-[#F8F5F0]/40">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right card — Global delivery */}
          <div className="bg-[#EFEBE4] rounded-3xl p-8 flex flex-col justify-between min-h-[340px] relative overflow-hidden">

            <h3 className="text-2xl font-bold text-[#1A1A1A] leading-snug">
              Deliver across <br /> the city
            </h3>

            {/* Map image */}
            <div className="relative w-full flex-1 mt-4 rounded-2xl overflow-hidden min-h-[160px]">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="City map delivery"
                fill
                className="object-cover opacity-40"
              />

              {/* Floating booking cards */}
              <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden relative shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A]">BMW M3</p>
                  <p className="text-[10px] text-[#6B6560]">Booked!</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-[#C0392B] rounded-xl px-3 py-2 shadow-md">
                <p className="text-xs font-bold text-white">$89/day</p>
                <p className="text-[10px] text-white/70">Audi R8</p>
              </div>

              {/* Location pins */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <RiMapPinLine size={32} className="text-[#C0392B] drop-shadow-lg" />
              </div>
              <div className="absolute top-1/3 right-1/3">
                <RiMapPinLine size={20} className="text-[#1A1A1A]/40" />
              </div>

              {/* Location badges */}
              <div className="absolute bottom-4 left-4 flex gap-1.5">
                {["Dhaka", "CTG", "Sylhet"].map((city) => (
                  <span key={city} className="text-[10px] font-medium bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-[#1A1A1A]">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom features */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: RiUserStarLine, label: "Expert Drivers" },
                { icon: RiShieldCheckLine, label: "Fully Insured" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2">
                  <Icon size={16} className="text-[#C0392B]" />
                  <span className="text-xs font-medium text-[#1A1A1A]">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}