import AboutSection from "@/components/homepage/AboutSection";
import AvailableCars from "@/components/homepage/AvailableCars";
import Banner from "@/components/homepage/Banner";
import CustomerService from "@/components/homepage/CustomerService";
import FeaturedCar from "@/components/homepage/FeaturedCar";
import HowItWorks from "@/components/homepage/HowItWorks";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <CustomerService />
      <FeaturedCar />
      <AvailableCars/>
      <HowItWorks />
       <Footer/>
    </>
  );
}
