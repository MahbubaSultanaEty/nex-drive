import AvailableCars from "@/components/homepage/AvailableCars";
import Banner from "@/components/homepage/Banner";
import CustomerService from "@/components/homepage/CustomerService";
import HowItWorks from "@/components/homepage/HowItWorks";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <CustomerService />
      <AvailableCars/>
      <HowItWorks />
       <Footer/>
    </>
  );
}
