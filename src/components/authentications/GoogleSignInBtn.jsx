"use client"
import { FcGoogle } from 'react-icons/fc';

const GoogleSignInBtn = () => {
      const handleGoogleLogin = () => {
    console.log("Google Login");
  };
    return (
        <button
                  onClick={handleGoogleLogin}
                  className="w-full h-14 rounded-xl border border-[#E0D9D0] bg-white hover:bg-[#F8F5F0] flex items-center justify-center gap-3 text-sm font-medium text-[#1A1A1A] transition-all duration-200"
                >
                  <FcGoogle size={20} />
        
                  Continue with Google
                </button>
    );
};

export default GoogleSignInBtn;