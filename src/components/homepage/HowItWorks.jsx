import HowItWorksCircle from "./HowItWorksCircle";

const steps = [
  {
    number: 1,
    title: "Browse & Select",
    desc: "Explore our curated fleet of luxury, SUV, and electric vehicles. Filter by type, location, and daily rate to find your perfect match.",
  },
  {
    number: 2,
    title: "Book Instantly",
    desc: "Choose your pickup date, location, and any add-ons like a driver. Confirm your booking in under 2 minutes — no paperwork needed.",
  },
  {
    number: 3,
    title: "We Deliver",
    desc: "Your selected vehicle is delivered right to your doorstep at your chosen time. Fully inspected, fueled, and ready to go.",
  },
  {
    number: 4,
    title: "Drive & Return",
    desc: "Enjoy your ride with full insurance coverage. When done, return it to any of our 50+ locations or we'll pick it up from you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#F8F5F0] py-12 overflow-hidden">

      

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div>
          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
            How It <br />
            <span className="text-[#C0392B]">Works</span>
          </h2>
          <p className="text-[#6B6560] leading-relaxed max-w-md">
            Renting a premium car with NexDrive is designed to be fast, transparent,
            and completely hassle-free — from browse to drive in just a few steps.
          </p>
        </div>

        {/* Right — Interactive Circle */}
        <HowItWorksCircle steps={steps} />

      </div>
    </section>
  );
}