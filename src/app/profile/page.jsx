import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  RiMailLine,
  RiMapPinLine,
  RiCalendarLine,
  RiEdit2Line,
} from "react-icons/ri";

export const metadata = {
  title: "My Profile | NexDrive",
  description:
    "Manage your NexDrive profile, bookings and account information.",
};

export default async function ProfilePage() {

    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
  const user = session?.user;
  console.log(session);
  return (
    <section className="min-h-screen bg-[#F8F5F0] pt-28 pb-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">

          {/* Left Profile Card */}
          <div className="bg-white border border-[#E0D9D0] rounded-[32px] overflow-hidden shadow-sm h-fit">

            {/* Cover */}
            <div className="relative h-40 bg-linear-to-br from-[#1A0A0A] via-[#2B1111] to-[#C0392B]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

            </div>

            {/* Content */}
            <div className="relative px-8 pb-8">

              {/* Avatar */}
              <div className="relative -mt-16 mb-5 w-fit mx-auto">

                <div className="relative w-32 h-32 rounded-full overflow-hidden border-[6px] border-white shadow-lg">

                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white" />
              </div>

              {/* Info */}
              <div className="text-center">

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#C0392B]/10 text-[#C0392B] text-[11px] font-medium tracking-wide uppercase mb-3">
                  {user.role}
                </span>

                <h1 className="text-2xl font-bold text-[#1A1A1A]">
                  {user.name}
                </h1>

                <div className="flex items-center justify-center gap-2 mt-3 text-sm text-[#6B6560]">
                  <RiMailLine size={15} className="text-[#C0392B]" />
                  {user.email}
                </div>

                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-[#6B6560]">
                  <RiMapPinLine size={15} className="text-[#C0392B]" />
                  Bangladesh
                </div>

                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-[#6B6560]">
                  <RiCalendarLine size={15} className="text-[#C0392B]" />
                  {user.updatedAt.toDateString()}
                </div>

                <p className="text-sm leading-relaxed text-[#6B6560] mt-5">
                  {user.bio}
                </p>

                {/* <button className="mt-6 inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium px-6 py-3 rounded-2xl transition-all duration-200">
                  <RiEdit2Line size={16} />
                  Edit Profile
                </button> */}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8">

            {/* Quick Links */}
            <div className="bg-white border border-[#E0D9D0] rounded-[32px] p-8 shadow-sm">

              <span className="text-xs uppercase tracking-[3px] text-[#C0392B] font-medium">
                Dashboard
              </span>

              <h2 className="text-3xl font-bold text-[#1A1A1A] mt-3">
                Welcome Back 👋
              </h2>

              <p className="text-sm text-[#6B6560] mt-3 leading-relaxed max-w-xl">
                Manage your bookings, explore luxury vehicles and keep your profile information updated.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                <Link
                  href="/my-bookings"
                  className="bg-[#F8F5F0] hover:bg-[#C0392B] hover:text-white border border-[#E0D9D0] rounded-2xl p-5 transition-all duration-200 no-underline"
                >
                  <h3 className="text-base font-semibold">
                    My Bookings
                  </h3>

                  <p className="text-sm mt-1 opacity-70">
                    View and manage your bookings
                  </p>
                </Link>

                <Link
                  href="/my-cars"
                  className="bg-[#F8F5F0] hover:bg-[#C0392B] hover:text-white border border-[#E0D9D0] rounded-2xl p-5 transition-all duration-200 no-underline"
                >
                  <h3 className="text-base font-semibold">
                    My Cars
                  </h3>

                  <p className="text-sm mt-1 opacity-70">
                    See all cars you added
                  </p>
                </Link>

                <Link
                  href="/add-car"
                  className="bg-[#F8F5F0] hover:bg-[#C0392B] hover:text-white border border-[#E0D9D0] rounded-2xl p-5 transition-all duration-200 no-underline"
                >
                  <h3 className="text-base font-semibold">
                    Add New Car
                  </h3>

                  <p className="text-sm mt-1 opacity-70">
                    List your luxury vehicle
                  </p>
                </Link>

                <Link
                  href="/cars"
                  className="bg-[#F8F5F0] hover:bg-[#C0392B] hover:text-white border border-[#E0D9D0] rounded-2xl p-5 transition-all duration-200 no-underline"
                >
                  <h3 className="text-base font-semibold">
                    Explore Cars
                  </h3>

                  <p className="text-sm mt-1 opacity-70">
                    Browse premium collections
                  </p>
                </Link>

              </div>
            </div>

            {/* Banner */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#1A0A0A] p-8">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

              <div className="relative z-10">

                <span className="text-xs uppercase tracking-[3px] text-[#C0392B] font-medium">
                  Premium Access
                </span>

                <h2 className="text-3xl font-bold text-[#F8F5F0] mt-3 leading-tight max-w-2xl">
                  Unlock Exclusive Luxury Cars & Priority Booking
                </h2>

                <p className="text-sm text-[#F8F5F0]/60 mt-4 leading-relaxed max-w-xl">
                  Get access to premium collections, priority customer support and seasonal offers.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}