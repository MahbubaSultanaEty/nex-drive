"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RiArrowLeftLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#C0392B]/15"
            style={{
              width: 120 + i * 70,
              height: 120 + i * 70,
              top: -60 - i * 35,
              right: -60 - i * 35,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 18 + i * 8, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Bottom left decoration */}
      <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#1A1A1A]/8"
            style={{
              width: 100 + i * 60,
              height: 100 + i * 60,
              bottom: -50 - i * 30,
              left: -50 - i * 30,
            }}
            animate={{ rotate: i % 2 === 0 ? -360 : 360 }}
            transition={{ duration: 20 + i * 6, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[10rem] font-bold leading-none text-[#1A1A1A]/8 select-none">
            404
          </h1>
        </motion.div>

        {/* Car emoji */}
        <motion.div
          className="-mt-12 mb-6 text-5xl"
          animate={{ x: [-8, 8, -8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          🚗
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-3">
            Page Not Found
          </span>
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">
            Wrong <span className="text-[#C0392B]">Turn!</span>
          </h2>
          <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
            Looks like this road doesn&apos;t lead anywhere. The page you&apos;re
            looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium px-7 py-3 rounded-full transition-colors duration-200 no-underline"
          >
            <RiArrowLeftLine size={16} />
            Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
}