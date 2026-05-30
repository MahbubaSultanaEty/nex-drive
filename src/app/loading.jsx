import React from 'react';

const loading = () => {
      return (
    <div className="min-h-screen bg-[#F8F5F0] flex flex-col items-center justify-center gap-6">
 
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#C0392B]" />
        <span className="text-2xl font-bold tracking-wide text-[#1A1A1A]">
          Nex<span className="text-[#C0392B]">Drive</span>
        </span>
      </div>
 
      {/* Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#E0D9D0]" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C0392B] animate-spin" />
      </div>
 
      <p className="text-sm text-[#6B6560] tracking-wide animate-pulse">
        Loading...
      </p>
 
    </div>
  );
}
 

export default loading;