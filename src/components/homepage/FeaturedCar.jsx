import Image from "next/image";

export default function FeaturedCar() {
  return (
    <section className="relative w-full bg-[#0D0505] overflow-hidden" style={{ minHeight: "480px" }}>

      {/* Big faded text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[clamp(80px,15vw,180px)] font-black uppercase tracking-widest text-white/5 whitespace-nowrap"
        >
          NEXDRIVE
        </span>
      </div>

      {/* Car image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[65%] pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=90"
          alt="Featured NexDrive Car"
          fill
          className="object-cover"
          priority
        />
        {/* Fade left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0505] via-[#0D0505]/60 to-transparent" />
        {/* Fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0505]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full py-20">

        {/* Top label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1.5px] bg-[#C0392B]" />
          <span className="text-xs font-medium tracking-[3px] uppercase text-[#C0392B]">
            Featured Model
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(36px,6vw,80px)] font-black uppercase leading-none text-[#F8F5F0] mb-6 max-w-md">
          Porsche <br />
          <span className="text-[#C0392B]">911</span> Carrera
        </h2>

        {/* Right side description */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 max-w-[220px] text-right hidden lg:block">
          <p className="text-xs text-[#F8F5F0]/50 leading-relaxed">
            Experience the pinnacle of automotive engineering — where precision meets passion on every road.
          </p>
        </div>

        {/* Bottom card */}
        <div className="mt-8 inline-flex flex-col bg-white/8 border border-white/10 backdrop-blur-sm rounded-xl p-4 max-w-[200px]">
          <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#C0392B] mb-1">
            Book Today
          </span>
          <span className="text-sm font-semibold text-[#F8F5F0] leading-snug">
            Starting from $150/day
          </span>
          <span className="text-xs text-[#F8F5F0]/40 mt-0.5">
            Instant confirmation
          </span>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === 0 ? "w-5 h-1.5 bg-[#C0392B]" : "w-1.5 h-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}