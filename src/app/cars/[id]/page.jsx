import BookingCard from "@/components/cardetailpage/bookingCard";
import CarImage from "@/components/cardetailpage/CarImage";
import CarInfo from "@/components/cardetailpage/CarInfo";
import SimilarCars from "@/components/cardetailpage/SimilarCars";
import WhyRentSection from "@/components/cardetailpage/WhyRentSection";
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";


export async function generateMetadata({ params }) {
    const {id}= await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`);
    const car= await res.json();
    return {
        title: `${car.carName}-NexDrive`,
        description: car.description,
    }
}

export default async function CarDetailsPage({ params }) {
  const { id } =await params;
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`)
    const car = await res.json();
    
    const resForAllCar = await fetch(`http://localhost:5000/cars`);
    const allCar = await resForAllCar.json();
    const similarCars = allCar.filter(c => c.carType === car.carType);

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">

          <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
              <Link href="/cars">
                    <button      
      className="inline-flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#C0392B] transition-colors duration-200"
    >
      <RiArrowLeftLine size={16} />
      Back to Cars
    </button>
              </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 flex flex-col gap-6">

            <CarImage car={car} />

            <CarInfo car={car} />

            <WhyRentSection />

          </div>

          <div className="lg:col-span-1">
            <BookingCard car={car} />
          </div>

        </div>

        <SimilarCars similarCars={similarCars} />

      </div>
    </div>
  );
}