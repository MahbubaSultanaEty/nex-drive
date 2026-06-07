import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const ubuntu =Ubuntu({
  variable: "ubuntu",
   weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});



export const metadata = {
  title: "NexDrive - Luxury Car Rentals",
  description: "Rent premium cars, track your bookings, and manage your profile with NexDrive. Experience luxury travel and seamless car rentals.",
  keywords: ["car rental", "luxury cars", "bookings", "NexDrive", "travel", "premium cars"],
  authors: [{ name: "Mahbuba Sultana", url: "https://yourwebsite.com" }],
  creator: "Mahbuba Sultana",
  publisher: "NexDrive",
  metadataBase: new URL("https://nex-drive-phi.vercel.app"),
  openGraph: {
    title: "NexDrive - Luxury Car Rentals",
    description: "Rent premium cars, track your bookings, and manage your profile with NexDrive.",
    url: "https://nex-drive-phi.vercel.app",
    siteName: "NexDrive",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "NexDrive - Luxury Car Rentals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexDrive - Luxury Car Rentals",
    description: "Rent premium cars, track your bookings, and manage your profile with NexDrive.",
    images: ["/social-preview.png"],
    creator: "@MahbubaSultana",
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${ubuntu.className} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <div className="relative">
          <ToastContainer />
          <Toaster/>
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          {children}
          
        </div>
      </body>
    </html>
  );
}
