"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RiMapPinLine, RiUserLine, RiSearchLine, RiCloseLine } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

const carTypes = ["All", "Sedan", "SUV", "Hatchback", "Luxury", "Electric", "Convertible", "Pickup Truck"];

const cars = [
  {
    _id: "6a1412705366d793d1489077",
    carName: "Audi R8 Spyder",
    dailyRentPrice: "89",
    carType: "Luxury",
    seats: "6",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    location: "Dhaka, Gulshan-1",
    description: "Experience the thrill of V10 performance. This convertible supercar combines raw power with everyday usability.",
  },
  {
    _id: "6a1412705366d793d1489078",
    carName: "BMW M3 Competition",
    dailyRentPrice: "75",
    carType: "Sedan",
    seats: "4",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    location: "Dhaka, Banani",
    description: "The ultimate sports sedan. Aggressive styling, track-ready performance, and premium German engineering.",
  },
  {
    _id: "6a1412705366d793d1489079",
    carName: "Mercedes GLE 450",
    dailyRentPrice: "110",
    carType: "SUV",
    seats: "7",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    location: "Dhaka, Dhanmondi",
    description: "Commanding presence meets luxurious comfort. Perfect for family trips or business travel in style.",
  },
  {
    _id: "6a1412705366d793d1489080",
    carName: "Tesla Model S",
    dailyRentPrice: "95",
    carType: "Electric",
    seats: "5",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    location: "Dhaka, Gulshan-2",
    description: "Zero emissions, maximum performance. The future of driving with autopilot and 400mi range.",
  },
  {
    _id: "6a1412705366d793d1489081",
    carName: "Porsche 911 Carrera",
    dailyRentPrice: "150",
    carType: "Luxury",
    seats: "4",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    location: "Dhaka, Uttara",
    description: "An icon of automotive excellence. Timeless design fused with cutting-edge Porsche performance.",
  },
  {
    _id: "6a1412705366d793d1489082",
    carName: "Range Rover Sport",
    dailyRentPrice: "120",
    carType: "SUV",
    seats: "7",
    availability: "Unavailable",
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    location: "Dhaka, Mirpur",
    description: "Refined luxury meets serious off-road capability. The definitive British premium SUV experience.",
  },
  {
    _id: "6a1412705366d793d1489083",
    carName: "Toyota Supra MK5",
    dailyRentPrice: "65",
    carType: "Sedan",
    seats: "2",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1627369500473-2c6e75551f03?w=800&q=80",
    location: "Dhaka, Motijheel",
    description: "A legend reborn. The MK5 Supra brings back the iconic nameplate with BMW-sourced inline-six power.",
  },
  {
    _id: "6a1412705366d793d1489084",
    carName: "Lamborghini Urus",
    dailyRentPrice: "200",
    carType: "SUV",
    seats: "5",
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1573950940509-d924ee3fd345?w=800&q=80",
    location: "Dhaka, Gulshan-1",
    description: "The world's most powerful SUV. Lamborghini DNA wrapped in a practical yet dramatic package.",
  },
];

// Framer Motion corner decoration
function CornerDecoration() {
  return (
    <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#C0392B]/20"
          style={{
            width: 120 + i * 70,
            height: 120 + i * 70,
            top: -60 - i * 35,
            right: -60 - i * 35,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 18 + i * 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* dot on circle */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-[#C0392B]/60"
            style={{ top: "50%", left: 0, marginTop: -4, marginLeft: -4 }}
          />
        </motion.div>
      ))}
    </div>
  );
}



// No results animation
function NoResults() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full flex flex-col items-center justify-center py-24 gap-4"
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        className="text-6xl"
      >
        🚗
      </motion.div>
      <h3 className="text-xl font-semibold text-[#1A1A1A]">No cars found</h3>
      <p className="text-sm text-[#6B6560]">Try a different search or filter</p>
    </motion.div>
  );
}

export default function CarsPage() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");

  // Filter logic — will be replaced with API call later
  const filtered = cars.filter((car) => {
    const matchSearch = car.carName.toLowerCase().includes(search.toLowerCase());
    const matchType = activeType === "All" || car.carType === activeType;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">

      {/* Hero strip */}
      <div className="relative bg-[#1A0A0A] overflow-hidden">
        <CornerDecoration />

        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(#C0392B 1px, transparent 1px), linear-gradient(90deg, #C0392B 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-3">
              Our Fleet
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#F8F5F0] mb-3">
              Explore <span className="text-[#C0392B] italic">Cars</span>
            </h1>
            <p className="text-[#F8F5F0]/50 text-sm max-w-md">
              Browse our full fleet of premium vehicles. Filter by type or search
              by name to find your perfect ride.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky search + filter bar */}
      <div className="sticky top-16 z-40 bg-[#F8F5F0]/90 backdrop-blur-md border-b border-[#E0D9D0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6560]" size={16} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by car name..."
              className="w-full bg-white border border-[#E0D9D0] rounded-xl pl-9 pr-9 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#C4BDB7] focus:outline-none focus:border-[#C0392B] transition-colors duration-200"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6560] hover:text-[#C0392B]"
              >
                <RiCloseLine size={16} />
              </button>
            )}
          </div>

          {/* Filter chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {carTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeType === type
                    ? "bg-[#C0392B] border-[#C0392B] text-white"
                    : "bg-white border-[#E0D9D0] text-[#6B6560] hover:border-[#C0392B] hover:text-[#C0392B]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

        </div>

        {/* Results count */}
        <div className="max-w-7xl mx-auto px-6 pb-3">
          <p className="text-xs text-[#6B6560]">
            Showing <span className="font-medium text-[#1A1A1A]">{filtered.length}</span> of{" "}
            <span className="font-medium text-[#1A1A1A]">{cars.length}</span> vehicles
          </p>
        </div>
      </div>

      {/* Cars grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <NoResults />
            ) : (
              filtered.map((car, i) => (
                <motion.div
                  key={car._id}
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
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}