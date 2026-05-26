import {
  RiShieldCheckLine,
  RiUserLine,
  RiMapPinLine,
  RiStarLine,
} from "react-icons/ri";

import AnimatedSection from "./AnimatedSection";

const whyRent = [
  {
    icon: RiShieldCheckLine,
    label: "Fully Insured",
  },
  {
    icon: RiUserLine,
    label: "Driver Available",
  },
  {
    icon: RiMapPinLine,
    label: "Doorstep Delivery",
  },
  {
    icon: RiStarLine,
    label: "Top Rated Fleet",
  },
];

export default function WhyRentSection() {
  return (
    <AnimatedSection delay={0.2}>
      <div className="bg-[#1A0A0A] rounded-2xl p-6">

        <h3 className="text-sm font-semibold text-[#F8F5F0] mb-4 tracking-wide">
          Why Rent With NexDrive?
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

          {whyRent.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C0392B]/15 flex items-center justify-center">

                <Icon
                  size={18}
                  className="text-[#C0392B]"
                />
              </div>

              <span className="text-xs text-[#F8F5F0]/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}