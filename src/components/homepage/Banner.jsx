import Link from "next/link";
import BannerSlider from "./BannerSlider";
import Image from "next/image";

export const metadata = {
  title: "NexDrive — Premium Car Rentals",
  description:
    "Discover NexDrive's exclusive fleet of luxury, SUV, and electric vehicles. Book your perfect ride in minutes with flexible daily rates and zero hassle.",
};

const stats = [
  { value: "500+", label: "Vehicles Available" },
  { value: "50+", label: "Pickup Locations" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "24/7", label: "Support" },
];

export default function Banner() {
  return (  
 <section className="relative  w-full min-h-screen bg-[#1A0A0A] overflow-hidden flex items-center pb-10">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#2C1010_0%,_#0D0D0D_70%)] " />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — Text content */}
        <div className="flex flex-col">

          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="NexDrive — Premium Car Rental"
              width={150}
              height={44}             
              priority
              className="object-contain"
            />
          </div>

          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-4">
            Premium Car Rental
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#F8F5F0] mb-5">
            Drive the <br />
            <span className="text-[#C0392B] italic">Extraordinary</span>
          </h1>

          <p className="text-base text-[#F8F5F0]/55 leading-relaxed mb-8 max-w-md">
            Explore our handpicked fleet of luxury sedans, powerful SUVs, and
            electric vehicles. Transparent pricing, instant booking, and
            doorstep delivery — wherever you are.
          </p>

          {/* CTAs btns */}
          <div className="flex flex-wrap gap-3 mb-14">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium px-7 py-3 rounded-full transition-colors duration-200 no-underline"
            >
              Explore Cars
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/12 border border-white/15 text-[#F8F5F0] text-sm font-medium px-7 py-3 rounded-full transition-colors duration-200 no-underline"
            >
              How it Works
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-[#F8F5F0]">{value}</p>
                <p className="text-xs text-[#F8F5F0]/40 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Interactive car slider */}
        <BannerSlider />

        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F8F5F0]" />
    </section>  
  );
}