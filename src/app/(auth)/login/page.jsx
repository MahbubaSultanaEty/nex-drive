import GoogleSignInBtn from '@/components/authentications/GoogleSignInBtn';
import LoginForm from '@/components/authentications/LoginForm';
import Image from 'next/image';
import Link from 'next/link';
export const metadata = {
  title: "Login | NexDrive",
  description:
    "Login to NexDrive and access premium car rentals, details, bookings, and rent your vehicles on best price",
};

const page = () => {
    return (
        <section className="min-h-screen bg-[#F8F5F0] flex flex-col md:flex-row  ">
            <div className='relative w-full md:w-1/2  min-h-80 md:min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center' style={{backgroundImage: "url('/cars.jpg')"}}>
                
                {/* Text*/}
                <div className='absolute inset-0 bg-black/75 '>
    <div className=" relative flex flex-col items-center justify-center h-full z-10 max-w-md px-8 text-center">
        
                  <span className="text-sm uppercase tracking-[3px] text-[#C0392B] font-medium">
                    Welcome Back
                  </span>
        
                  <h1 className="text-3xl font-bold text-[#ecdbdb] mt-2">
                    Login to NexDrive
                  </h1>
        
                  <p className="text-sm text-[#f5e7e5b9] mt-2 leading-relaxed">
                    Access your bookings, added cars and rental history.
                  </p>
                </div>
                </div>
            
            </div>

              <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-6">
                <div className='w-full max-w-md bg-white border border-[#E0D9D0] rounded-[28px] p-8 shadow-sm'>
                        {/* Form */}
                <LoginForm/>
        
                {/* Divider */}
                <div className="relative my-7">
        
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E0D9D0]" />
                  </div>
        
                  <div className="relative flex justify-center">
        
                    <span className="bg-white px-4 text-xs uppercase tracking-wider text-[#6B6560]">
                      Or continue with
                    </span>
                  </div>
                </div>
        
                {/* Google button */
                }
               <GoogleSignInBtn/>
        
                {/* Register */}
                <p className="text-sm text-[#6B6560] text-center mt-7">
        
                  Don&apos;t have an account?{" "}
        
                  <Link
                    href="/register"
                    className="text-[#C0392B] hover:text-[#922B21] font-medium"
                  >
                    Register
                  </Link>
                </p>
            </div>                           
              </div>
            </section>
    );
};

export default page;