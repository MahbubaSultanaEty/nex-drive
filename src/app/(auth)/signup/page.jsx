import React from 'react';

const SignupPage = () => {
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
        
               
            </div>                           
              </div>
            </section>
    );
};

export default SignupPage;