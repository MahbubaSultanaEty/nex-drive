import Image from "next/image";
import { RiShieldCheckLine, RiUserStarLine, RiMapPinLine } from "react-icons/ri";
import { TbEngine } from "react-icons/tb";

export default function LuxurySection() {
  return (
    <section className="bg-[#0D0505] py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top image grid */}
        <div className="grid grid-cols-3 gap-1 h-[280px] md:h-[360px]">
          {/* Left — tall */}
          <div className="relative col-span-1 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=85"
              alt="Luxury car front"
              fill
              className="object-cover object-center brightness-75"
            />
          </div>
          {/* Middle — wheel close up */}
          <div className="relative col-span-1 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85"
              alt="Car wheel detail"
              fill
              className="object-cover object-center brightness-75"
            />
          </div>
          {/* Right — rear */}
          <div className="relative col-span-1 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=85"
              alt="Luxury car rear"
              fill
              className="object-cover object-center brightness-75"
            />
          </div>
        </div>

        {/* Main car image */}
        <div className="relative w-full h-[300px] md:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&q=90"
            alt="NexDrive premium car"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0505] via-transparent to-transparent" />
        </div>

        {/* Bottom content */}
        <div className="px-6 md:px-12 pb-16 -mt-8 relative z-10">

          {/* Heading row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-[#F8F5F0]">
              Luxury Meets <br />
              <span className="text-[#C0392B]">Excellence</span>
            </h2>
            <p className="text-sm text-[#F8F5F0]/40 max-w-[220px] leading-relaxed md:text-right">
              Experience a new standard of luxury and excellence with our premium vehicles and exceptional service.
            </p>
          </div>

          {/* Featured card + features row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* Center featured card */}
            <div className="md:col-start-2 bg-[#1A0A0A] border border-white/10 rounded-2xl p-5">
              <div className="w-8 h-8 rounded-lg bg-[#C0392B]/15 flex items-center justify-center mb-3">
                <TbEngine size={18} className="text-[#C0392B]" />
              </div>
              <h4 className="text-sm font-bold text-[#F8F5F0] mb-2">Performance Engine</h4>
              <p className="text-xs text-[#F8F5F0]/40 leading-relaxed">
                Our advanced fleet features high-performance engines that deliver thrilling acceleration and superior control on every drive.
              </p>
            </div>

            {/* Left feature */}
            <div className="md:col-start-1 md:row-start-1 flex gap-3 md:mt-4">
              <div className="w-8 h-8 rounded-lg bg-[#C0392B]/10 flex items-center justify-center shrink-0 mt-0.5">
                <RiUserStarLine size={17} className="text-[#C0392B]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#F8F5F0] mb-1">Driver Assistance</h4>
                <p className="text-xs text-[#F8F5F0]/40 leading-relaxed">
                  Our professional drivers ensure safety and comfort, delivering advanced features for a smoother and more confident drive.
                </p>
              </div>
            </div>

            {/* Right feature */}
            <div className="md:col-start-3 md:row-start-1 flex gap-3 md:mt-4">
              <div className="w-8 h-8 rounded-lg bg-[#C0392B]/10 flex items-center justify-center shrink-0 mt-0.5">
                <RiShieldCheckLine size={17} className="text-[#C0392B]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#F8F5F0] mb-1">Safety Features</h4>
                <p className="text-xs text-[#F8F5F0]/40 leading-relaxed">
                  Our vehicles are equipped with smart safety technologies designed to keep you protected and confident on every journey.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}