
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiMapPinLine,
  RiUserLine,
  RiEditLine,
  RiDeleteBinLine,
} from "react-icons/ri";
import EditCarModal from "./EditCarModal";
import { Car } from "@gravity-ui/icons";
import { DeleteMyAddedCar } from "./DeleteMyAddedCar";

import Link from "next/link";

export default function MyAddedCarsClient({ userId, cars }) {
  
  const handleDelete = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
      method: "DELETE",
    });

    setDeleteId(null);
  };

  if (cars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          className="text-6xl"
        >
          <Car />
        </motion.div>

        <h3 className="text-xl font-semibold text-[#1A1A1A]">
          No cars listed yet
        </h3>

        <p className="text-sm text-[#6B6560]">
          Add your first car to get started
        </p>

        <Link
          href="/add-car"
          className="mt-2 inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200 no-underline"
        >
          Add a Car
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <AnimatePresence>
          {cars.map((car, i) => (
            <motion.div
              key={car._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-[#E0D9D0] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Image */}
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={car.imageUrl}
                  alt={car.carName}
                  fill
                  className="object-cover"
                />

                <div className="absolute top-4 right-4">
                  <span
  className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-sm ${
    car.availability === "Available"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-red-100 text-red-600"
  }`}
>
  {car.availability}
</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-2 space-y-3">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A1A1A] leading-tight">
                      {car.carName}
                    </h2>

                    <p className="text-sm text-[#6B6560] flex items-center gap-1 mt-1">
                      <RiMapPinLine className="text-[#C0392B]" />
                      {car.location}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-xl font-bold text-[#C0392B] leading-none">
                      ${car.dailyRentPrice}
                    </p>

                    <span className="text-sm text-[#6B6560]">
                      per day
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F8F5F0] rounded-2xl border border-[#E0D9D0] p-2">
                    <p className="text-xs uppercase tracking-wider text-[#6B6560] ">
                      Car Type
                    </p>

                    <p className="text-base font-semibold text-[#1A1A1A]">
                      {car.carType}
                    </p>
                  </div>

                  <div className="bg-[#F8F5F0] rounded-2xl border border-[#E0D9D0] p-2">
                    <p className="text-xs uppercase tracking-wider text-[#6B6560] ">
                      Seats
                    </p>

                    <p className="text-base font-semibold text-[#1A1A1A] flex items-center gap-2">
                      <RiUserLine className="text-[#C0392B]" />
                      {car.seats}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#6B6560] ">
                    Description
                  </p>

                  <p className="text-sm leading-relaxed text-[#4B4B4B] line-clamp-3">
                    {car.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <EditCarModal car={car} />

                  <DeleteMyAddedCar car={car} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    
    </>
  );
}

