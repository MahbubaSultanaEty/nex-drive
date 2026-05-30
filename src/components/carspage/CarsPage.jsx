"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  RiSearchLine, RiCloseLine } from "react-icons/ri";

import { Button } from "@heroui/react";
import CarCard from "../CarCard";

const carTypes = ["All", "Sedan", "SUV", "Hatchback", "Luxury", "Electric", "Convertible", "Pickup Truck"];

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

function Loading() {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
       <div className="skeleton  h-75 w-full"></div>
       <div className="skeleton h-75 w-full"></div>
       <div className="skeleton h-75 w-full"></div>
    </div>
}

export default function CarsPage() {
  const [search, setSearch] = useState("");
    const [activeType, setActiveType] = useState("All");
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true)
    
    const fetchCars=()=> {
       
        const params = new URLSearchParams();
        if(search)params.append("search", search)
        if (activeType !== "All") {
            params.append("type", activeType);
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars?${params}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCars(data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                 setLoading(false)
            })
    };

        useEffect(() => {
        fetchCars();
    }, [activeType]);

    const handleSearch =
        () => fetchCars();
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
          <div className="relative w-full sm:w-72 flex">
            <RiSearchLine className="absolute left-3 top-5 -translate-y-1/2 text-[#6B6560]" size={16} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by car name..."
              className="w-full bg-white border border-[#E0D9D0] rounded-xl pl-9 pr-9 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#C4BDB7] focus:outline-none focus:border-[#C0392B] transition-colors duration-200"
            />
                      {search && (
                          <>
                                 <button
                onClick={() => setSearch("")}
                className="absolute right-20 top-5 -translate-y-1/2 text-[#6B6560] hover:text-[#C0392B]"
              >
                <RiCloseLine size={16} />
                              </button>  
                              <Button className=" border-[#C0392B] rounded-2xl btn hover:text-[#C0392B] "
                      variant="outline"    onClick={handleSearch}>Search</Button>
                          </>
                                  
                      )}
                      
                      
          </div>

          {/* Filter tabs */}
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
            Showing <span className="font-medium text-[#1A1A1A]">{cars.length}</span> of{" "}
            <span className="font-medium text-[#1A1A1A]">{cars.length}</span> vehicles
          </p>
        </div>
      </div>

      {/* Cars Container */}
          <div className="max-w-7xl mx-auto px-6 py-12">
              {loading ? <Loading/>:  <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            { cars.length === 0 ? (
              <NoResults />
            ) : (
              cars.map((car, i) => (
                  <CarCard key={car._id} i={i} car={ car} />
              ))
            )}
          </AnimatePresence>
        </motion.div>}
       
      </div>
    </div>
  );
}