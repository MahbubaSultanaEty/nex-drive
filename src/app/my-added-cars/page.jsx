import MyAddedCarsClient from "@/components/myAddedCars/MyAddedCarsClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "My Added Cars — NexDrive",
  description: "Manage your listed vehicles on NexDrive. Edit details, update availability, or remove listings.",
};

const MyAddedCars = async() => {

    const  session = await auth.api.getSession({
        headers: await headers()
    })
  
    const user = session?.user;
    const userId = user?.id;
  console.log(userId);
  
  const tokenData = await auth.api.getToken({
      headers: await headers()
    })
    const token = tokenData?.token;
    const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/car/${userId}`,  {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  const cars = await res.json();
console.log(cars);
    return (
         <div className="min-h-screen bg-[#F8F5F0] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
 
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-3">
            Fleet Management
          </span>
          <h1 className="text-4xl font-bold text-[#1A1A1A]">
            My Added <span className="text-[#C0392B]">Cars</span>
          </h1>
          <p className="text-[#6B6560] mt-2 text-sm">
            Manage your listed vehicles — edit details or remove listings.
          </p>
        </div>
 
        <MyAddedCarsClient cars={cars} userId={userId} />
 
      </div>
    </div>
    );
};

export default MyAddedCars;