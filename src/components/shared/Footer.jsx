
import Image from "next/image";
import Link from "next/link";
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Cars", href: "/cars" },
  { label: "Add Car", href: "/add-car" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "My Added Cars", href: "/my-cars" },
];

const socials = [
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const contact = [
  { icon: RiMapPinLine, text: "Gulshan-1, Dhaka, Bangladesh" },
  { icon: RiPhoneLine, text: "+880 1700 000 000" },
  { icon: RiMailLine, text: "support@nexdrive.app" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A0A0A] text-[#F8F5F0]">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Logo + About */}
        <div className="lg:col-span-1">
          <div className="mb-2">
            <Image
              src="/logo.png"
              alt="NexDrive Logo"
              width={130}
              height={40}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-[#F8F5F0]/50 leading-relaxed mb-4">
            NexDrive is your premium car rental destination — offering a
            curated fleet of luxury, SUV, and electric vehicles with
            transparent pricing and doorstep delivery across Bangladesh.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#F8F5F0]/50 hover:bg-[#C0392B] hover:border-[#C0392B] hover:text-white transition-all duration-200"
              >
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>

        {/* Col 2 — Useful Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-[#F8F5F0] mb-3 md:mb-5">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {usefulLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-[#F8F5F0]/50 hover:text-[#C0392B] transition-colors duration-200 no-underline flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-[#F8F5F0] mb-3 md:mb-5">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-2 ">
            {contact.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C0392B]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={14} className="text-[#C0392B]" />
                </div>
                <span className="text-sm text-[#F8F5F0]/50 leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-[#F8F5F0] mb-2 md:mb-5">
            Newsletter
          </h4>
          <p className="text-sm text-[#F8F5F0]/50 leading-relaxed mb-5">
            Get the latest deals, new arrivals, and exclusive offers delivered
            straight to your inbox.
          </p>
          <form className="flex flex-col gap-3" >
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F8F5F0] placeholder:text-[#F8F5F0]/25 focus:outline-none focus:border-[#C0392B] transition-colors duration-200"
            />
            <button
              type="submit"
              className="w-full bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium py-3 rounded-xl transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F8F5F0]/30">
            © {new Date().getFullYear()} NexDrive. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-[#F8F5F0]/30 hover:text-[#C0392B] transition-colors duration-200 no-underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}