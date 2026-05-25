// app/cars/page.jsx
export const metadata = {
  title: "Explore Cars — NexDrive",
  description: "Browse NexDrive's full fleet of luxury, SUV, electric, and performance vehicles. Filter by type, search by name, and book instantly.",
  keywords: "car rental, luxury cars, SUV rental, electric cars, NexDrive, Dhaka car rental",
  openGraph: {
    title: "Explore Cars — NexDrive",
    description: "Find your perfect ride from NexDrive's premium fleet.",
    type: "website",
  },
};

import CarsPage from "@/components/CarsPage";
export default function Page() {
  return <CarsPage />;
}