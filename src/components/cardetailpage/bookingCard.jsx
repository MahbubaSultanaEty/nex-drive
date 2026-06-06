"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiUserLine, RiFileTextLine, RiCheckboxCircleLine } from "react-icons/ri";
import { toast } from "react-toastify";

export default function BookingCard({ car }) {
  const [driverNeeded, setDriverNeeded] = useState("No");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!user) {
      router.push("/login");
      return;
    }

    setLoading(true);

    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      carId: car._id,
      carName: car.carName,
      dailyRentPrice: car.dailyRentPrice,
      imageUrl: car.imageUrl,
      driverNeeded,
      specialNote: note,
      bookingDate: new Date(),
    };

    const { data: tokenData } = await authClient.token();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      console.log(data);
      toast.success("Booking Successful");
    } catch (err) {
      console.error(err);
      toast.error("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C4BDB7] focus:outline-none focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/10 transition-all duration-200";

  return (
    <div className="sticky top-24">
      <div className="bg-white border border-[#E0D9D0] rounded-2xl p-6 shadow-sm">

        {/* Header */}
        <div className="mb-5 pb-4 border-b border-[#E0D9D0]">
          <span className="text-xs font-medium tracking-[2px] uppercase text-[#C0392B]">
            Book this Car
          </span>
          <div className="flex items-end justify-between mt-1">
            <h3 className="text-base font-semibold text-[#1A1A1A]">{car.carName}</h3>
            <div>
              <span className="text-2xl font-bold text-[#C0392B]">${car.dailyRentPrice}</span>
              <span className="text-xs text-[#6B6560]">/day</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleBooking} className="flex flex-col gap-4">

          {/* Driver Needed */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#6B6560] uppercase tracking-wider flex items-center gap-1.5">
              <RiUserLine size={13} className="text-[#C0392B]" />
              Driver Needed?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["Yes", "No"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setDriverNeeded(opt)}
                  className={`py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                    driverNeeded === opt
                      ? "bg-[#C0392B] border-[#C0392B] text-white"
                      : "bg-[#F8F5F0] border-[#E0D9D0] text-[#6B6560] hover:border-[#C0392B] hover:text-[#C0392B]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Special Note */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#6B6560] uppercase tracking-wider flex items-center gap-1.5">
              <RiFileTextLine size={13} className="text-[#C0392B]" />
              Special Note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Any special requests or instructions..."
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Summary */}
          <div className="bg-[#F8F5F0] rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6B6560]">Daily Rate</span>
              <span className="font-medium text-[#1A1A1A]">${car.dailyRentPrice}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6B6560]">Driver Fee</span>
              <span className="font-medium text-[#1A1A1A]">{driverNeeded === "Yes" ? "$20" : "—"}</span>
            </div>
            <div className="border-t border-[#E0D9D0] pt-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-[#1A1A1A]">Total/day</span>
              <span className="font-bold text-[#C0392B]">
                ${driverNeeded === "Yes" ? Number(car.dailyRentPrice) + 20 : car.dailyRentPrice}
              </span>
            </div>
          </div>

          {/* Booking button */}
          <button
            type="submit"
            disabled={car.availability !== "Available" || loading}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              car.availability === "Available"
                ? "bg-[#C0392B] hover:bg-[#922B21] text-white"
                : "bg-[#E0D9D0] text-[#C4BDB7] cursor-not-allowed"
            }`}
          >
            <RiCheckboxCircleLine size={16} />
            {loading ? "Booking..." : car.availability === "Available" ? "Book Now" : "Unavailable"}
          </button>

          {!user && car.availability === "Available" && (
            <p className="text-xs text-center text-[#6B6560]">
              Please <span className="text-[#C0392B] font-medium cursor-pointer" onClick={() => router.push("/login")}>login</span> to book this car.
            </p>
          )}

          {car.availability !== "Available" && (
            <p className="text-xs text-center text-[#6B6560]">
              This car is currently unavailable for booking.
            </p>
          )}

        </form>
      </div>
    </div>
  );
}