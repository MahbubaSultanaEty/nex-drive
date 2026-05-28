"use client"
import { authClient } from '@/lib/auth-client';
import { google } from 'better-auth';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const GoogleSignInBtn = () => {
      const handleGoogleLogin = async() => {
        const data = await authClient.signIn.social({
          provider: "google",
          callbackURL: "/"
        })
        if (data) {
          toast.success("  Signing in...")
        }
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