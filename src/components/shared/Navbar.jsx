"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome, HiOutlineViewGrid, HiOutlinePlusCircle, HiOutlineBookOpen } from "react-icons/hi";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MdOpenInNew } from "react-icons/md";

const navLinks = [
  { label: "Home",         href: "/",            icon: HiOutlineHome },
  { label: "Explore Cars", href: "/cars",         icon: HiOutlineViewGrid },
    { label: "Add Car", href: "/add-car", icon: HiOutlinePlusCircle },
  {label: "My Added Cars", href:"my-added-cars", icon: MdOpenInNew},
  { label: "My Bookings",  href: "/my-bookings",  icon: HiOutlineBookOpen },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm md:border-b-0  border-b border-[#E0D9D0]/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
   
              
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="w-2 h-2 rounded-full bg-[#C0392B]" />
          <span className="text-2xl font-bold tracking-wide text-[ivory]">
            Nex<span className="text-[#C0392B]">Drive</span>
          </span>
        </Link>

        {/* Desktop nav links — pill container with low opacity bg */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1A1A1A]/8 border border-[#E0D9D0] rounded-full px-2 py-1.5">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm transition-all duration-200 no-underline ${
                  isActive
                    ? "bg-[#C0392B] text-white font-medium"
                    : "text-[#beb7b2de] hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
                }`}
              >
                <Icon size={15} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop login */}
        <Link
          href="/login"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white bg-[#C0392B] hover:bg-[#922B21] px-5 py-2 rounded-full transition-colors duration-200 no-underline"
        >
          Login
        </Link>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-medium text-white bg-[#C0392B] px-4 py-1.5 rounded-full no-underline"
          >
            Login
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-[#1A1A1A] p-1"
          >
            {menuOpen ? <RiCloseLine color="ivory" size={22} /> : <RiMenuLine color="ivory" size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E0D9D0]/50 bg-transparent backdrop-blur-sm">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-3.5 text-sm border-b border-[#E0D9D0]/50 last:border-none no-underline transition-colors duration-150 ${
                  isActive
                    ? "text-[#C0392B] font-medium bg-[#C0392B]/5"
                    : "text-[#beb7b2e8] hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/4"
                }`}
              >
                <Icon size={17} />
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}