import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  RiCalendarLine,
  RiUserLine,
  RiFileTextLine,
  RiCarLine,
} from "react-icons/ri";

export const metadata = {
  title: "My Bookings — NexDrive",
  description: "View and manage all your NexDrive car rental bookings in one place.",
};

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookings/${user.id}`,
  );
  const bookings = await res.json();

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-3">
            Your Reservations
          </span>
          <h1 className="text-4xl font-bold text-[#1A1A1A]">
            My <span className="text-[#C0392B]">Bookings</span>
          </h1>
          <p className="text-[#6B6560] mt-2 text-sm">
            {bookings.length} {bookings.length === 1 ? "booking" : "bookings"}{" "}
            found
          </p>
        </div>

        {/* Empty state */}
        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#C0392B]/10 flex items-center justify-center">
              <RiCarLine size={32} className="text-[#C0392B]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              No bookings yet
            </h3>
            <p className="text-sm text-[#6B6560]">
              You haven&apos;t booked any cars yet.
            </p>
            <Link
              href="/cars"
              className="mt-2 inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200 no-underline"
            >
              Explore Cars
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white border border-[#E0D9D0] rounded-2xl overflow-hidden hover:shadow-md hover:border-[#C0392B]/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative w-full sm:w-44 h-36 sm:h-auto shrink-0">
                    <Image
                      src={booking.imageUrl}
                      alt={booking.carName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold text-[#1A1A1A]">
                          {booking.carName}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <RiCalendarLine
                            size={12}
                            className="text-[#C0392B]"
                          />
                          <span className="text-xs text-[#6B6560]">
                            {new Date(booking.bookingDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xl font-bold text-[#C0392B]">
                          ${booking.dailyRentPrice}
                        </span>
                        <p className="text-[10px] text-[#6B6560]">/day</p>
                      </div>
                    </div>

                    {/* driver and note */}
                    <div className="flex flex-wrap gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${
                          booking.driverNeeded === "Yes"
                            ? "bg-[#C0392B]/8 border-[#C0392B]/20 text-[#C0392B]"
                            : "bg-[#F8F5F0] border-[#E0D9D0] text-[#6B6560]"
                        }`}
                      >
                        <RiUserLine size={11} />
                        Driver: {booking.driverNeeded}
                      </span>

                      {/* Special note */}
                      <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[#E0D9D0] bg-[#F8F5F0] text-[#6B6560]">
                        <RiFileTextLine
                          size={11}
                          className="text-[#C0392B] shrink-0"
                        />
                        <span className="truncate max-w-50">
                          {booking.specialNote || "No special note"}
                        </span>
                                </span>
                                
                        {/* Cancel booking button */}
<div className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full hover:bg-red-500 border border-red-200 hover:border-red-500 bg-[#f8f2f0] text-[#6B6560]">
  <button className="text-xs font-medium text-red-500 hover:text-white  px-4 py-2 rounded-full transition-all duration-200 ">
    Cancel Booking
  </button>
</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
