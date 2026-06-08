import GoogleSignInBtn from '@/components/authentications/GoogleSignInBtn';
import SignUpForm from '@/components/authentications/SignUpForm';
import { Star } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const SignupPage = () => {
    return (
      <section className="relative min-h-screen bg-[#F8F5F0] flex items-center justify-center px-6 py-16">
          <Toaster/>
        <div className='absolute inset-0 '>
            <Image
              src={"/cars.jpg"}
            fill
            className='object-cover'
            alt='cars '
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className='absolute inset-0 '/>
</div>

      <div className="relative z-10 w-full max-w-md bg-[ivory] border border-[#E0D9D0] rounded-[28px] p-8 shadow-sm">         
        {/* Header */}
        <div className="text-center mb-8">

          <span className="text-xs uppercase tracking-[3px] text-[#C0392B] font-medium">
            lets Get Started With
          </span>

          <h1 className="text-3xl font-bold text-[#1A1A1A] mt-2">
             NexDrive
          </h1>

          <p className="text-sm text-[#6B6560] mt-2 leading-relaxed ">
            Create your account and get access to car details, renting and bookings. <span ><Star className='inline'/></span>
          </p>
        </div>

        {/* Form */}
       <SignUpForm/>

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

        {/* Google button */}
        <GoogleSignInBtn/>
      </div>
    </section>
    );
};

export default SignupPage;
