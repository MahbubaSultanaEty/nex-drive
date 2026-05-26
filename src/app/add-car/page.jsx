import AddCarPage from "@/components/AddCarPage";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Add Car - NexDrive",
  description: "List your vehicle on NexDrive fleet"
}

export default function page() {
  return <>
    <AddCarPage />
    <Footer/>
  </>
}