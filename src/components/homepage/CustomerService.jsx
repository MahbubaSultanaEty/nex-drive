import Image from "next/image";
import { RiShieldCheckLine, RiCustomerService2Line, RiMapPinTimeLine, RiSecurePaymentLine } from "react-icons/ri";

const features = [
  {
    icon: RiShieldCheckLine,
    title: "Fully Insured Rides",
    desc: "Every vehicle in our fleet comes with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: RiCustomerService2Line,
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is always available — day or night, wherever you are.",
  },
  {
    icon: RiMapPinTimeLine,
    title: "Doorstep Delivery",
    desc: "We bring the car to you. Pick your location and we'll handle the rest.",
  },
  {
    icon: RiSecurePaymentLine,
    title: "Secure Payments",
    desc: "Multiple payment options with bank-grade encryption on every transaction.",
  },
];

export default function CustomerService() {
  return (
    <section className="bg-[#F8F5F0] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Mockup image */}
        <div className="relative flex items-center justify-center">
          {/* Soft bg blob */}
          <div className="absolute w-80 h-80 rounded-full bg-[#C0392B]/8 blur-3xl" />

          {/* Mockup card */}
          <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-xl border border-[#E0D9D0] overflow-hidden">

            {/* Top bar */}
            <div className="bg-[#1A0A0A] px-5 py-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C0392B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E0D9D0]/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E0D9D0]/30" />
              <span className="ml-auto text-xs text-white/40 font-medium tracking-wide">nexdrive.app</span>
            </div>

            {/* Mockup content */}
            <div className="p-5">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80"
                  alt="NexDrive car rental service"
                  fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Fake UI elements */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="h-3 w-28 bg-[#1A1A1A] rounded-full mb-1.5" />
                  <div className="h-2 w-20 bg-[#E0D9D0] rounded-full" />
                </div>
                <span className="text-sm font-bold text-[#C0392B]">$89<span className="text-xs font-normal text-[#6B6560]">/day</span></span>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 h-9 rounded-full bg-[#C0392B] flex items-center justify-center">
                  <div className="h-2 w-16 bg-white/60 rounded-full" />
                </div>
                <div className="w-9 h-9 rounded-full border border-[#E0D9D0] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#C0392B]" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-white border border-[#E0D9D0] rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 z-20">
            <div className="w-9 h-9 rounded-full bg-[#C0392B]/10 flex items-center justify-center">
              <RiShieldCheckLine className="text-[#C0392B]" size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A1A1A]">Fully Verified</p>
              <p className="text-[10px] text-[#6B6560]">All cars inspected</p>
            </div>
          </div>
        </div>

        {/* Right — Text content */}
        <div>
          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-4">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
            Customer Service <br />
            <span className="text-[#C0392B]">Above All</span>
          </h2>

          <p className="text-[#6B6560] leading-relaxed mb-10 max-w-md">
            At NexDrive, we believe renting a car should be effortless. From
            booking to drop-off, our team is committed to delivering a premium
            experience every single time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C0392B]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="text-[#C0392B]" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{title}</h3>
                  <p className="text-xs text-[#6B6560] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}