import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { RiMapPinLine, RiUserLine } from 'react-icons/ri';
import { TbManualGearbox } from 'react-icons/tb';
import { motion } from 'framer-motion';

const CarCard = ({car, i}) => {
    return (
        <motion.div
                  
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group bg-white border border-[#E0D9D0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#C0392B]/20 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={car.imageUrl}
                      alt={car.carName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                        car.availability === "Available"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                          : "bg-red-50 text-red-500 border border-red-200"
                      }`}
                    >
                      {car.availability}
                    </span>
                    <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#1A0A0A]/60 text-[#F8F5F0] backdrop-blur-sm">
                      {car.carType}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1.5">
                      <h3 className="text-sm font-semibold text-[#1A1A1A] leading-snug">
                        {car.carName}
                      </h3>
                      <div className="text-right shrink-0 ml-2">
                        <span className="text-base font-bold text-[#C0392B]">${car.dailyRentPrice}</span>
                        <span className="text-[10px] text-[#6B6560]">/day</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#6B6560] leading-relaxed mb-3 line-clamp-2">
                      {car.description}
                    </p>

                    <div className="flex items-center gap-3 mb-4 text-xs text-[#6B6560]">
                      <span className="flex items-center gap-1">
                        <RiUserLine size={12} className="text-[#C0392B]" />
                        {car.seats}
                      </span>
                      <span className="flex items-center gap-1">
                        <TbManualGearbox size={12} className="text-[#C0392B]" />
                        Auto
                      </span>
                      <span className="flex items-center gap-1 truncate">
                        <RiMapPinLine size={12} className="text-[#C0392B]" />
                        {car.location.split(",")[0]}
                      </span>
                    </div>

                    <Link
                      href={`/cars/${car._id}`}
                      className={`flex items-center justify-center gap-1.5 w-full text-xs font-medium py-2.5 rounded-xl transition-all duration-200 no-underline group/btn ${
                        car.availability === "Available"
                          ? "bg-[#C0392B] hover:bg-[#922B21] text-white"
                          : "bg-[#F8F5F0] text-[#C4BDB7] border border-[#E0D9D0] pointer-events-none"
                      }`}
                    >
                      View Details
                      {car.availability === "Available" && (
                        <BsArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                      )}
                    </Link>
                  </div>
                </motion.div>
    );
};

export default CarCard;